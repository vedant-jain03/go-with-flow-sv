"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./middleware/auth"));
const Authenticate_1 = __importDefault(require("./routes/Authenticate"));
const Project_1 = __importDefault(require("./routes/Project"));
require('dotenv').config();
const app = (0, express_1.default)();
// middlewars
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
require('./database/connect');
app.get("/", (req, res) => {
    res.send("Go with flow v2 backend...");
});
app.use(auth_1.default);
app.use('/auth', Authenticate_1.default);
app.use('/user', Project_1.default);
app.set('trust proxy', 1);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Listening...");
});
//# sourceMappingURL=index.js.map