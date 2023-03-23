"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Project_1 = __importDefault(require("../models/Project"));
const router = (0, express_1.Router)();
// GET /user/:id/projects
router.get('/:id/projects', async (req, res) => {
    try {
        const id = req.params.id;
        const projects = await Project_1.default.find({ user_id: id });
        return res.status(200).send({ projects });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
});
// GET /user/:id/project/:project_id
router.get('/:id/project/:project_id', async (req, res) => {
    const id = req.params.id;
    const project_id = req.params.project_id;
    try {
        const project = await Project_1.default.findOne({ _id: project_id });
        if (!project) {
            res.status(404).send({ message: "Project not found" });
        }
        return res.status(200).send({ project });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
});
// POST /user/:id/project
router.post('/:id/project', async (req, res) => {
    const id = req.params.id;
    try {
        const { projectname } = req.body;
        const newProject = await new Project_1.default({ user_id: id, projectname, elements: "[]" });
        const isProjectCreated = await newProject.save();
        if (!isProjectCreated) {
            return res.status(500).send({ message: "Something went wrong" });
        }
        return res.status(201).send({ message: "Project created successfully!", newProject });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
});
// DELETE /user/:id/project/:project_id
router.delete('/:id/project/:project_id', async (req, res) => {
    const project_id = req.params.project_id;
    try {
        await Project_1.default.findByIdAndDelete(project_id);
        return res.status(200).json({ message: "Project Deleted" });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
});
// PATCH /user/:id/project/:project_id
router.patch('/:id/project/:project_id', async (req, res) => {
    const id = req.params.id;
    const project_id = req.params.project_id;
    try {
        const { elements } = req.body;
        const result = await Project_1.default.findByIdAndUpdate(project_id, { elements: elements }, { new: true });
        return res.status(201).json({ message: 'Project Updated', result: result });
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Something went wrong" });
    }
});
exports.default = router;
//# sourceMappingURL=Project.js.map