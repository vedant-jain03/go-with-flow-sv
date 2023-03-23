"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const project = new mongoose_1.default.Schema({
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
});
const Project = mongoose_1.default.model('PROJECT', project);
exports.default = Project;
//# sourceMappingURL=Project.js.map