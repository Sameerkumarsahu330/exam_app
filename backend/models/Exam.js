import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    questions: [
        {
            question: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Question",
            },
            selectedOption: {
                type: String,
                required: true,
            },
            isCorrect: {
                type: Boolean,
                required: true,
            },
        },
    ],
    score: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Exam = mongoose.model("Exam", examSchema);
export default Exam;