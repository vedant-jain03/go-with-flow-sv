"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const envsafe_1 = require("envsafe");
(0, dotenv_1.config)();
exports.default = (0, envsafe_1.envsafe)({
    NODE_ENV: (0, envsafe_1.str)({
        devDefault: 'development',
        choices: ['development', 'production'],
    }),
    AUTH_TOKEN: (0, envsafe_1.str)({
        devDefault: process.env.AUTH_TOKEN,
    }),
});
//# sourceMappingURL=config.js.map