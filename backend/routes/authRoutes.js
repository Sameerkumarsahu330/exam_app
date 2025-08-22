import express from 'express';
import { registerStudent, login } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/register", registerStudent);
router.post("/login", login);

router.get("/me", protect, (req, res) => {
    res.json(req.user);
})

export default router;