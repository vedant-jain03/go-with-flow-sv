"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const authenticate = (req, res, next) => {
    let token = req.headers.authorization;
    token = token ? token.split(" ")[1] : '';
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    if (token !== config_1.default.AUTH_TOKEN) {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
};
exports.default = authenticate;
//# sourceMappingURL=auth.js.map