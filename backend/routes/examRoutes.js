import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { startExam, submitExam, getResults } from '../controllers/examController.js';

const router = express.Router();

// Get random questions
router.get("/start", protect, startExam);

// Post answer
router.post("/submit", protect, submitExam);

// Get results
router.get("/result", protect, getResults);

export default router;