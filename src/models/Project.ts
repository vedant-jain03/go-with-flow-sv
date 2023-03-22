import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const project = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    projectname: {
        type: String,
        required: true
    },
    elements: {
        type: String,
        required: true
    }
})

const Project = mongoose.model('PROJECT', project);
export default Project;
