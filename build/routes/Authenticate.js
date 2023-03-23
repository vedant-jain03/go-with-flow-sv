"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send("Authentication successful!");
});
// POST: /auth/register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User_1.default.findOne({ email });
        if (userExists) {
            return res.status(400).send({ message: "User with this mail already exists!" });
        }
        const newUser = await new User_1.default({ name, email, password });
        const isUserSave = await newUser.save();
        if (!isUserSave) {
            return res.status(500).send({ message: "Something went wrong!" });
        }
        return res.status(201).send({ message: "User created!" });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ message: "Something went wrong" });
    }
});
// POST /auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user_email = await User_1.default.findOne({ email });
        if (!user_email) {
            return res.status(401).json({ message: "Email not found" });
        }
        const is_pswd = await bcryptjs_1.default.compare(password, user_email.password);
        if (!is_pswd) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        return res.status(200).json({ message: "User Login Successfully!", user: user_email });
    }
    catch (e) {
        res.status(500).send({ message: "Something went wrong" });
    }
});
exports.default = router;
//# sourceMappingURL=Authenticate.js.map