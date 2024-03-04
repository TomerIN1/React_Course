/**
Lesson 15: useEffect Dependencies
Video Link: https://www.youtube.com/watch?v=jQc_bTFZ5_I&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=15

We lean in lesson 14 the useEffect fire the function in every render. But, you don't always want to run a function after every single renders. maybe only a certain renders. 
to use that we can use something called a dependency array - and this is basically an array that we can pass into this use effect hook as a second argument. 

first case: 
  1. Add empty array which will run the function just in the first render. 

    useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [])

  2. Another option is to add actual dependencies to this array. by that we mean any state values that should trigger the useEffect function to run when they change. 
     imagine, we want to run this useEffect at the beginning when the comp first renders, but also whenever a certain value changes (for example the name of the user. in our case change from mario to luigi). 
     we want to run the function if the setName function change the state of the name, only the name and not the blogs! 
     so the name becomes a dependency that we add into this second argument. 
     
    useEffect(() => {
      console.log('use effect ran');
      console.log(blogs);
      }, [name])

      now, useEffect is going to watch this value, and if it changes it will run the function. 

 */

import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
    </div>
  );
}
 
export default Home;
