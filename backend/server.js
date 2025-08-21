import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port'+PORT));