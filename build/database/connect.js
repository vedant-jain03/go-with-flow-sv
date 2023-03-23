"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
(0, dotenv_1.config)();
const DB = process.env.DATABASE;
mongoose_1.default.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    try {
        console.log('DB Connected');
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=connect.js.map