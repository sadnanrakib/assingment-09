import React from 'react';
import"./Blog.css"

const Blog = () => {
    return (
        <div className='blog'>
            <div>
            <h2>Q.1:What is the PurPose of the React Router</h2>
            <p>Ans:ReactJS Router is mainly used for developing Single Page Web <br /> Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this <br /> URL path matches any 'route' inside the router file, the user will be redirected to that particular route</p>
            
            </div>
            <hr />
            <div>
            <h2>Q.2:How does context api work?</h2>
            <p>Ans:The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            
            </div>
            <hr />
            <div>
            <h2>Q.3:What is Usehref?</h2>
            <p>Ans:The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the  component in react-router-dom to see how it uses useHref internally to determine its own href value</p>
            
            </div>
           
        </div>
    );
};

export default Blog;