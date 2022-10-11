import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTitle from '../Quiz/QuizTitle';
import"./Home.css"

const Home = () => {
    const quizs = useLoaderData();
    return (
        <div className='home-container'>
             <div style={{ 
                backgroundImage: `url(https://web.programming-hero.com/thumbnail.png)`,
                padding:'200px',
                backgroundSize: 'cover',
                overflow: 'hidden',
                marginBottom:'20px'
        
        
                }}>
      {/* <h3 className='color'>You can create a question in a quiz that does not include answers or point values. A text (no question) quiz question can be used as a preface to a quiz or a group of questions within a quiz. You may wish to use this type of question to include a passage of text, image, or video that will be referenced in subsequent questions..</h3> */}
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