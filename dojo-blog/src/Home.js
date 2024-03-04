/**
Lesson 14: useEffect Hook (the basics). 
Video Link: https://www.youtube.com/watch?v=gv9ugDJ1ynU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=14

So far we've seen one hook which is the useState, and we use that to create some state for the component, but there's many other hooks that we can use in react. 
in this lesson we will learn about the useEffect Hook. 

The useEffect hook runs a function every render of the components. 
Remember, the component renders initially when it first loads and it renders all of the return code to the dom, but then it also happens when the state changes. 
so, when the state changes it re-renders the dom so we can update that state in the browser. 
so, this useEffect hook is a way to run code on every render, and that can be useful for many different reasons which we're going to see latere on. 
let's focus on how we can use it. 

how to use useEffect hook?
  1. import the hook to your file. "import { useEffect, useState } from "react";"
  2. above the return statement we're gonna use this hook, so all we need to do is type: "useEffect();"
  3. inside it, we're going to pass a function which gonna run every time there is a re-render. 

Notes:
  1. dont store it in a constant - it doesn't return anything to us. 
  2. normally, inside the function we could do something like fetch data, or communicate with some kind of authentication service. 
     and those things are known as side effects in react. but for now we're just doing simple console.log. 
 */

import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  })

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;
