import { config } from "dotenv";
import { envsafe, str } from "envsafe";

config();

export default envsafe({
    NODE_ENV: str({
        devDefault: 'development',
        choices: ['development', 'production'],
    }),
    AUTH_TOKEN: str({
        devDefault: process.env.AUTH_TOKEN,
    }),
})