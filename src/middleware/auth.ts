import { Request, NextFunction, Response } from "express";
import config from "../config";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
    token = token ? token.split(" ")[1] : '';
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    if (token !== config.AUTH_TOKEN) {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
}

export default authenticate;