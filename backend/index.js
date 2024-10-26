import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB is connected!');
}).catch((err) => {
    console.log(err);
})

const app = express();
app.use(cors());

app.listen(4000 , () => {
    console.log('Server is running on port 4000!')
})