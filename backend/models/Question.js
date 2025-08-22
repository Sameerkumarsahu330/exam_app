import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
    {
        text: { type: String, required: true },
        options: [
            {
                optionText: { type: String, required: true },
                isCorrect: { type: Boolean, default: false },
            },
        ],
    },
    { timestamps: true }
);

const Question = mongoose.model("Question",questionSchema);

export default Question;