import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Question from './models/Question.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const seedQuestions = async () => {
    try {
        await Question.deleteMany();

        const questions = [
            {
                text: "What is React primarily used for?",
                options: [
                    { optionText: "Building user interfaces", isCorrect: true },
                    { optionText: "Managing databases", isCorrect: false },
                    { optionText: "Server-side rendering only", isCorrect: false },
                    { optionText: "Mobile operating systems", isCorrect: false },
                ],
            },
            {
                text: "Who developed React?",
                options: [
                    { optionText: "Google", isCorrect: false },
                    { optionText: "Microsoft", isCorrect: false },
                    { optionText: "Facebook (Meta)", isCorrect: true },
                    { optionText: "Amazon", isCorrect: false },
                ],
            },
            {
                text: "What is the correct way to create a component in React?",
                options: [
                    { optionText: "function MyComponent() { return <div>Hello</div>; }", isCorrect: true },
                    { optionText: "component MyComponent() { return <div>Hello</div>; }", isCorrect: false },
                    { optionText: "def MyComponent() { return <div>Hello</div>; }", isCorrect: false },
                    { optionText: "function:MyComponent() { return <div>Hello</div>; }", isCorrect: false },
                ],
            },
            {
                text: "Which hook is used to manage state in a functional component?",
                options: [
                    { optionText: "useState", isCorrect: true },
                    { optionText: "useEffect", isCorrect: false },
                    { optionText: "useReducer", isCorrect: false },
                    { optionText: "useMemo", isCorrect: false },
                ],
            },
            {
                text: "What does JSX stand for?",
                options: [
                    { optionText: "JavaScript XML", isCorrect: true },
                    { optionText: "Java Syntax Extension", isCorrect: false },
                    { optionText: "JSON XML", isCorrect: false },
                    { optionText: "Java Standard eXtension", isCorrect: false },
                ],
            },
            {
                text: "Which method is used to render React components to the DOM?",
                options: [
                    { optionText: "ReactDOM.render()", isCorrect: true },
                    { optionText: "React.mount()", isCorrect: false },
                    { optionText: "React.attach()", isCorrect: false },
                    { optionText: "ReactDOM.create()", isCorrect: false },
                ],
            },
            {
                text: "What is the default port for running a React app using create-react-app?",
                options: [
                    { optionText: "3000", isCorrect: true },
                    { optionText: "8080", isCorrect: false },
                    { optionText: "5000", isCorrect: false },
                    { optionText: "4200", isCorrect: false },
                ],
            },
            {
                text: "Which hook runs side effects in React?",
                options: [
                    { optionText: "useEffect", isCorrect: true },
                    { optionText: "useState", isCorrect: false },
                    { optionText: "useRef", isCorrect: false },
                    { optionText: "useCallback", isCorrect: false },
                ],
            },
            {
                text: "Props in React are:",
                options: [
                    { optionText: "Read-only", isCorrect: true },
                    { optionText: "Mutable", isCorrect: false },
                    { optionText: "Private to component", isCorrect: false },
                    { optionText: "Used only in class components", isCorrect: false },
                ],
            },
            {
                text: "Which of the following is true about React keys?",
                options: [
                    { optionText: "They help identify which items changed in a list", isCorrect: true },
                    { optionText: "They must be globally unique", isCorrect: false },
                    { optionText: "They are required for every element", isCorrect: false },
                    { optionText: "They improve styling of components", isCorrect: false },
                ],
            },
            {
                text: "How do you create a React app quickly?",
                options: [
                    { optionText: "npx create-react-app myApp", isCorrect: true },
                    { optionText: "npm install react myApp", isCorrect: false },
                    { optionText: "react new myApp", isCorrect: false },
                    { optionText: "node create myApp", isCorrect: false },
                ],
            },
            {
                text: "Which of the following is NOT a React hook?",
                options: [
                    { optionText: "useFetch", isCorrect: true },
                    { optionText: "useReducer", isCorrect: false },
                    { optionText: "useMemo", isCorrect: false },
                    { optionText: "useRef", isCorrect: false },
                ],
            },
            {
                text: "What is the virtual DOM in React?",
                options: [
                    { optionText: "A lightweight copy of the actual DOM", isCorrect: true },
                    { optionText: "The actual DOM", isCorrect: false },
                    { optionText: "A database for React components", isCorrect: false },
                    { optionText: "A debugging tool", isCorrect: false },
                ],
            },
            {
                text: "Which company maintains React?",
                options: [
                    { optionText: "Meta (Facebook)", isCorrect: true },
                    { optionText: "Apple", isCorrect: false },
                    { optionText: "Google", isCorrect: false },
                    { optionText: "IBM", isCorrect: false },
                ],
            },
            {
                text: "What is the correct way to pass data to a child component?",
                options: [
                    { optionText: "<Child propName={value} />", isCorrect: true },
                    { optionText: "<Child.propName = value />", isCorrect: false },
                    { optionText: "Child(propName: value)", isCorrect: false },
                    { optionText: "this.Child.propName(value)", isCorrect: false },
                ],
            },
            {
                text: "Which hook is used to store a mutable value that does not cause re-render?",
                options: [
                    { optionText: "useRef", isCorrect: true },
                    { optionText: "useState", isCorrect: false },
                    { optionText: "useEffect", isCorrect: false },
                    { optionText: "useMemo", isCorrect: false },
                ],
            },
            {
                text: "In React, what is used to handle forms?",
                options: [
                    { optionText: "Controlled components", isCorrect: true },
                    { optionText: "Server-side handlers only", isCorrect: false },
                    { optionText: "Databases", isCorrect: false },
                    { optionText: "AJAX only", isCorrect: false },
                ],
            },
            {
                text: "What is React Router used for?",
                options: [
                    { optionText: "Routing between different components/pages", isCorrect: true },
                    { optionText: "Managing Redux store", isCorrect: false },
                    { optionText: "Fetching APIs", isCorrect: false },
                    { optionText: "Styling components", isCorrect: false },
                ],
            },
            {
                text: "Which hook is used to memoize a value?",
                options: [
                    { optionText: "useMemo", isCorrect: true },
                    { optionText: "useCallback", isCorrect: false },
                    { optionText: "useState", isCorrect: false },
                    { optionText: "useEffect", isCorrect: false },
                ],
            },
            {
                text: "What is the purpose of useCallback in React?",
                options: [
                    { optionText: "To memoize functions", isCorrect: true },
                    { optionText: "To manage state", isCorrect: false },
                    { optionText: "To fetch API data", isCorrect: false },
                    { optionText: "To render UI", isCorrect: false },
                ],
            },
        ];

        await Question.insertMany(questions);
        console.log("Questions seeded");
        process.exit();
    }catch (err){
        res.status(500).json({ message: "Error seeding questions"});
        process.exit(1);
    }
};

seedQuestions();