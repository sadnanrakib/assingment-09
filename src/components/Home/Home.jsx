import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTitle from '../Quiz/QuizTitle';
import"./Home.css"

const Home = () => {
    const quizs = useLoaderData();
    return (
        <div className='home-container'>
             <div style={{ 
                backgroundImage: `url(https://www.itprotoday.com/sites/itprotoday.com/files/programming.jpg)`,
                padding:'200px',
                backgroundSize: 'cover',
                overflow: 'hidden',
                marginBottom:'20px'
        
        
                }}>
      <h3 className='color'>Software Developer. Developers of software for smartphones, tablets, and other mobile devices are in charge of creating and updating programmes...</h3>
    </div>
           <div className='quiz-container'> 
           {
                quizs.map(quiz => <QuizTitle
                key={quiz.id}
                quiz={quiz}
                ></QuizTitle>)
            }
           </div>
        </div>
    );
};

export default Home;