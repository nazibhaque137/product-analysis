import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1>Blogs</h1>
        <div className="blogs-container">
            <h3>What is context API?</h3>
            <p>Context API is used in React to generate global variables that can be passed around.
                This is an alternative to "prop drilling".
                This means passing props from grandparent to child to parent and so on.
                Context is also marketed as a simpler, lighter way to Redux state management.
                Context() will give us a consumer and a provider.
                Provider is a component that supplies the state to its children, as its name suggests.
                It will contain the "store" and serve as the parent of all components that may require it.
                And Consumer is a component that consumes and uses the state. </p>
            </div>
            <div className="blogs-container">
            <h3>What is Semantic Tag?</h3>
            <p>Semantic tag represents the cornerstone of accessibility in a web application.
                We use HTML semantic elements to emphasize the meaning of content on our websites. 
                It can often provide us with free accessibility.
                React allows us to build and compose components using any type of valid HTML elements including semantic ones.
                And it is a nice practice to build accessible websites. 
                In accordance to that, we can have all sorts of semantics elements divided into components. 
                Such components can be either Class components or Functional components.
                </p>
        </div>
        </div>

    );
};

export default Blogs;