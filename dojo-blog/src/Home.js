/**
Lesson 13: Functions as Props. 
Video Link: https://www.youtube.com/watch?v=CWEOYFzgOJs&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=13

What is I want to now allow users to delete these blogs by clicking on a button or something like that. 
  1. first - we need a button inside the blog list for each blog that we output. so, in the BlogList.js we will create a button, with OnClick event and an anonymous function to handel the blog delete. 
  2. second - we need to create a function to delete a blog. we do that in the home.js file, because we can use the setBlogs functions to recreate the blogs lists. we need to update the useState. 
  3. third - we add the handelDelete function as a prop to the BlogList.js " <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />" 
  4. fourth - we add the handleDelete function to the BlogList Props distructuring. and we can do it. we can pass functions as props. so now, from the BlogList.js we invoke this function that was decleted in the home.js file. 
  
This way we lern how to pass a function as a Prop. 

 */

import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete = (id) => { //take the id of the blog we want to remove. 
    const newBlogs = blogs.filter(blog => blog.id !== id); //create newblogs. take the blogs, and create a new list of blogs using the filter method.
    setBlogs(newBlogs); //now we pass the newBlogs array to the setBlogs. 
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;
