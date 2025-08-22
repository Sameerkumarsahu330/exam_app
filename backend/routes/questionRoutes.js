import express from "express";
import Question from "../models/Question.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Fetching random questions
// Get /api/questions/start?limit=5
// Private

router.get("/start", protect, async (req, res) => {
    try{
        const limit = parseInt(req.query.limit) || 5;
        const questions = await Question.aggregate([{ $sample: { size: limit }}]);

        res.json(questions);
    }catch (err){
        res.status(500).json({ message: "Failed to fetch questions "});
    }
});

export default router;