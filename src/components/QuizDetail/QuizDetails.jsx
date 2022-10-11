import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './QuizDetails.css'
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {

    const notify = () => toast("Wow so easy!",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const unNotify = () => toast("worng Ans!",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const quizs = useLoaderData();
    console.log(quizs)
    const[ans,setAns]=useState("")
    console.log("ans",ans);
    const handleQuiz=(e)=>{
            const newAns=(e.target.value);
            setAns(newAns)
    }
    return (
        <div className='quiz'>
            {
                quizs.data.questions.map(quiz=>{ return (
                    
                    <div className='quiz-option'>
                       
                       <section className='container'>
                                             
                        <div>
                            <h4>{quiz.question}</h4>
                        </div>

                        <div>
                          <button className='btn'>X</button>
                       </div>
                       </section>
                        

                        {
                        quiz.options.map(question=>{return(
                            <div className='quiz-options'>

                        
                             {/* if(ans===quiz.correctAnswer){
                                alert("okk")
                            }
                            else{
                                alert("error")
                            } */}
                            
                        
                          <input type="radio" onClick={ans===quiz.correctAnswer?notify:unNotify} onChange={handleQuiz} name="Answer" id="" value={question} />
                                  {console.log("CorrectAns",quiz.correctAnswer)}
                           <label htmlFor="">{question}</label>


                        
                            
                               <ToastContainer
                               position="top-center"
                               autoClose={5000}
                               hideProgressBar={false}
                               newestOnTop={false}
                               closeOnClick
                               rtl={false}
                               pauseOnFocusLoss
                               draggable
                               pauseOnHover
                               theme="light"
                               
                               />
                        
                         
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