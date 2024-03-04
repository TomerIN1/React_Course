/**
Lesson 16: Using JSON Server
Video Link: https://www.youtube.com/watch?v=eao7ABGFUXs&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=16

now we know how to use the use effect hook, we're going to be useing it to fetch some data. 
useEffect is a good place to fetch data in a component because we know that it runs the function when the comp first renders initially,
  and that's generally when we want to go out and fetch some data,
  and then we can use that data in out app instead of the data that we have under the blogs in the file. 
  because typically in a web app you wouldn't hard code data like this. 
  instead it whould probably come from a database using an api endpoints. 

  since it's not a course on database, but we still want to use one, we can use a JSON server "database" that will allow us to interact with this local project database and lean how to get, post and delete data from a database. 
  in order to use JSON server package we need to install it here. 

  1. step 1- create a data folder. 
  2. step 2 - create a json file (df.json) and put some data inside. in our case it's 2 objects, each one is represent a blog. 
  3. step 3 - in order to use it, open a different terminal and type: "npx json-server --watch data/db.json --port 8000" and press enter. now, this is then going to watch the database file and it's going to wrap it with some api endpoints. and this is our end point to do get / post / delete data from our database. 

notes:
  1. in the picture json server end points - you'll see all the end points we're going to learn in the next lessons.
  2. next lesson, we'll learn how to make a fetch request in useEffect to fetch all of the blogs.  
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
