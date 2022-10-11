import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    // console.log(quiz)
    return (
        <div>
            <h1>Friend Details{quiz.question}</h1>
        </div>
    );
};

export default QuizDetails;