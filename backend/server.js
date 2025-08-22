import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import examRoutes from './routes/examRoutes.js';

dotenv.config();

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/exams", examRoutes);

app.get('/', (request, response) => {
    response.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port'+PORT));