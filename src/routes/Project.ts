import { Router } from "express";
import Project from "../models/Project";
const router = Router();

// GET /user/:id/projects
router.get('/:id/projects', async (req, res) => {
    try {
        const id = req.params.id;
        const projects = await Project.find({ user_id: id });
        return res.status(200).send({ projects });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
})

// GET /user/:id/project/:project_id
router.get('/:id/project/:project_id', async (req, res) => {
    const id = req.params.id;
    const project_id = req.params.project_id;
    try {
        const project = await Project.findOne({ _id: project_id });
        if (!project) {
            res.status(404).send({ message: "Project not found" });
        }
        return res.status(200).send({ project });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
})

// POST /user/:id/project
router.post('/:id/project', async (req, res) => {
    const id = req.params.id;
    try {
        const { projectname } = req.body;
        const newProject = await new Project({ user_id: id, projectname, elements: "[]" });
        const isProjectCreated = await newProject.save();
        if (!isProjectCreated) {
            return res.status(500).send({ message: "Something went wrong" });
        }
        return res.status(201).send({ message: "Project created successfully!", newProject })
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
})

// DELETE /user/:id/project/:project_id
router.delete('/:id/project/:project_id', async (req, res) => {
    const project_id = req.params.project_id;
    try {
        await Project.findByIdAndDelete(project_id);
        return res.status(200).json({ message: "Project Deleted" });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
})

// PATCH /user/:id/project/:project_id
router.patch('/:id/project/:project_id', async (req, res) => {
    const id = req.params.id;
    const project_id = req.params.project_id;
    try {
        const { elements } = req.body;
        const result = await Project.findByIdAndUpdate(project_id, elements, { new: true });
        return res.status(204).json({ message: 'Project Updated', result: result });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
})
export default router;