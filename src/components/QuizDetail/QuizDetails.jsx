import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './QuizDetails.css'
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const notify = () => toast("Wow so easy!");
    const quizs = useLoaderData();
    const[quiz,setQuiz]=useState([])
    // console.log(quizs)
    return (
        <div className='quiz'>
            {
                quizs.data.questions.map(quiz=>{ return (
                    <div className='quiz-option'>
                        
                        <h4>{quiz.question}</h4>

                        {
                        quiz.options.map(question=>{return(
                            <div className='quiz-options'>

                        
                          <input type="radio" onClick={notify} name="Answer" id="" value={question} />
                           <label htmlFor="">{question}</label>
                           <ToastContainer />
                         
                          </div>
                            
                        )})
                        
                        
                        }
                    </div>
                )})
            }
        </div>
    );
};

export default QuizDetails;