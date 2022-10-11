import React from 'react';
import { Link } from 'react-router-dom';
import"./QuizTitle.css"

const QuizTitle = ({quiz}) => {
    const {id,logo,name,question,total}= quiz;
    return (
        <div className='title'>
            <div className='image'>
            <img src={logo} alt="" />
            </div>
            <div className='flex'>
            <h2>{name}</h2>
            <h3>Quiz:{total}</h3>
            <h4>{question}</h4>
            <button className='btn'><Link to={`/quiz/${id}`}>Start Practice</Link></button>
            
            </div>
            
        </div>
    );
};

export default QuizTitle;