import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='bg-green-500 mt-10 p-10 text-2xl text-white'>This is blogs page</h1>
            <h1 className='text-left mt-10 bg-green-100 text-xl text-red-500 mx-10 px-20'>Q-1: What is Contex api? </h1>
            <h1 className='text-left bg-green-100 text-xl text-green-500 mx-10 px-20'>Ans: The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</h1>

<h1 className='text-left mt-10 bg-green-100 text-xl text-red-500 mx-10 px-20'>Q-2: what is semantic tag? </h1>
            <h1 className='text-left bg-green-100 text-xl text-green-500 mx-10 px-20 mb-5'>Ans: Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a  tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them. 
            When using semantic tags to convey meaning rather than for presentation purposes, be careful that you don't use them incorrectly simply for their common display properties. Some of the most commonly misused semantic tags include:

blockquote — Some people use the  tag for indenting text that is not a quotation. This is because blockquotes are indented by default. If you simply want to indent text that's not a blockquote, use CSS margins instead.
p — Some web editors use  (a non-breaking space contained in a paragraph) to add extra space between page elements, rather than defining actual paragraphs for the text of that page. 

By using HTML tags that have meaning, you create pages that impart more information than those that simply surround everything with  tags.  
            </h1>
        </div>
    );
};

export default Blogs;

// Repo Link: https://github.com/programming-hero-web-course-4/product-analysis-website-masud1989
// Live site Link: https://masud-phone-reviews.netlify.app/ 