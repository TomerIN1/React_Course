/**
lesson-12: Reusing Components. 
Video link: https://www.youtube.com/watch?v=-YpnB-zlkPU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=12

We saw in the last lesson how we use Props to pass data from one component to another component. 
if we duplicate the row: "<BlogList blogs={blogs} title="All Blogs" />" we can reuse it over and over. 
now, can change a bit the line of code in order to show just 'mario' blogs.
  1. use use the filter method which fires a callback func for each item in the array.
     if return true, it keeps it in the array and if false it filters it out of the array.
     finally, it returns a new array with only the items we don't filter out. 
  2. we filter just mario blogs and get it in the browser. 

so you see how this blogList component can be resued, but we can use it with different data and that makes it really useful for doing things like a seach page whereby the title matches the seach term for example. 

 */

import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" />
    </div>
  );
}
 
export default Home;
