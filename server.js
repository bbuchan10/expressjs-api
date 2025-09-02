import express from "express";
import mongoose from "mongoose";

import usersRouter from './src/routes/users.js';
import authRouter from './src/routes/auth.js';



const app = express();
const port = 3000; // Or any port you prefer

mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017/expressjs-api";

await mongoose.connect(mongoDB);
// Middleware
app.use(express.json());

app.get('/api/v1/', (req, res) => {
    res.send('Hello from Express API!');
});

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/authenticate', usersRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});