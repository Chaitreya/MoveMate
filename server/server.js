import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URL).then((result) => {
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
})