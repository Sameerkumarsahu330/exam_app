import Question from '../models/Question.js';
import Exam from '../models/Exam.js';

export const startExam = async (req, res) => {
    const questions = await Question.aggregate([{ $sample: { size: 2 }}]);//, { $project: { options: { isCorrect: 0 } }}
    res.json(questions);
};

export const submitExam = async (req, res) => {
    const { answers } = req.body;
    let score = 0;

    const processedAnswers = await Promise.all(
        answers.map(async (ans) => {
            const q = await Question.findById(ans.questionId);
            const correctOption = q.options.find((o) => o.isCorrect);

            const isCorrect = ans.selectedOption === correctOption.optionText;
            if(isCorrect) score++;

            return {
                question: q._id,
                selectedOption: correctOption.optionText,
                isCorrect,
            };
        })
    );

    const exam = await Exam.create({
        user: req.user._id,
        questions: processedAnswers,
        score,
    });

    res.json({ score, examId: exam._id });
};

export const getResults = async ( req, res ) => {
    const exams = await Exam.find({ user: req.user._id }).populate("questions.question");
    res.json(exams);
};