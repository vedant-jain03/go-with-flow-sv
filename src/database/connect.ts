import { config } from "dotenv";
import mongoose, {ConnectOptions} from "mongoose";
config()

const DB: any = process.env.DATABASE

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions).then(()=>{
    try{
       console.log('DB Connected');
    }catch(err){
       console.log(err);
    }
})
