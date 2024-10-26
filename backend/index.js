import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB is connected!');
}).catch((err) => {
    console.log(err);
})

const __dirname = path.resolve();

const app = express();

app.use(cors());

app.use(express.json());

app.listen(4000 , () => {
    console.log('Server is running on port 4000!')
})

app.use(express.static(path.join(__dirname, '/frontend/dist'))); 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});