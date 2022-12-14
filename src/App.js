import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Error from './components/ErrorPage/Error';
import About from './components/About/Statistics';
import QuizDetails from './components/QuizDetail/QuizDetails';
import QuizTitle from './components/Quiz/QuizTitle';

function App() {
  const router = createBrowserRouter(
    [
   {
    path:'/',
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[
        {
          path:'/',
          loader:()=>fetch('quiz.json'),
          element:<Home></Home>
        },
        
        {
          path:'/home',
          loader:()=>fetch('quiz.json'),
          element:<Home></Home>
        },
        
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },

        {
          path:'/home',
          element:<QuizTitle></QuizTitle>
        },
        {
          path:'/quiz/:id',
          loader:async({params})=>{
            // console.log(params.id);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<QuizDetails></QuizDetails>
        },
        
    ]
   }

    ]
  )
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
