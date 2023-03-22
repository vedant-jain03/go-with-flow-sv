import express from 'express';
import cors from 'cors';
import authenticate from './middleware/auth';
import AuthRoute from './routes/Authenticate';
import Project from './routes/Project';
require('dotenv').config();

const app = express();

// middlewars
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./database/connect')

app.get("/", (req, res) => {
    res.send("Go with flow v2 backend...");
})

app.use(authenticate);
app.use('/auth', AuthRoute)
app.use('/user', Project)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Listening...")
})
