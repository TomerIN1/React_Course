/**
Lesson 10: Outputting Lists. 
Video link: https://www.youtube.com/watch?v=tHjxSVaj_wY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=10

Since we're building a mini simple blog, ideally we're going to need to have a list of blogs to output in the template. 
So, we're going to use useState in oter to present these blogs, since the data might change at some point in time. 
we might delete a blog and we need react to update the dom when that happens. 



 */

import { useState } from "react";

const Home = () => {

  // the initial value is going to by an array of objects, where each object represent a blog.
  // we're going to use the id in order to map those blogs. if the id will not be unique then it will rander the same blog twice. 
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  //we are using blogs.map in order to loop all the blogs, each time to grab some title and body (based on their unique id number) and present it in the browser. 
  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;
