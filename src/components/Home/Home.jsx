import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTitle from '../Quiz/QuizTitle';
import"./Home.css"

const Home = () => {
    const quizs = useLoaderData();
    return (
        <div className='home-container'>
             <div style={{ 
                backgroundImage: `url(https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?w=2000)`,
                padding:'200px',
                backgroundSize: 'cover',
                overflow: 'hidden',
                marginBottom:'20px'
        
        
                }}>
      <h3 className='color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a similique dolore deserunt unde inventore expedita ut doloremque doloribus totam recusandae, saepe dignissimos, quis sequi neque omnis eum consequuntur quisquam.</h3>
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