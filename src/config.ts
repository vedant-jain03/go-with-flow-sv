import { config } from "dotenv";
import { envsafe, str } from "envsafe";

config();

export default envsafe({
    NODE_ENV: str({
        devDefault: 'development',
        choices: ['development', 'production'],
    }),
    AUTH_TOKEN: str({
        devDefault: 'aMCSdT2b9JI1qhk910S4L39u2OxjPxGGvDzdbQKQEjR3Kq9znzRvyqC7Ux45LSpN',
    }),
})