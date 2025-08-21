import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
}

// New Student Registration
// Route => POST /api/auth/register
export const registerStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const studentAlreadyExists = await User.findOne({ email });
        if(studentAlreadyExists){
            return res.status(409).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Student Login
// Route => POST /api/auth/login
export const login = async (req, res) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isPasswordMatching = await bcrypt.compare(password, user.password);

        if(!isPasswordMatching){
            return res.status(401).json({ message: 'Invalid email or password'});
        }

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    }catch (err){
        res.status(500).json({ message: err.message });
    }
};