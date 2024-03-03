/**
lesson 11: Props 
Video link: https://www.youtube.com/watch?v=PHaECbrKgs0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=11

Right here in the home component, we're outputting a list of blogs, and we're doing it directly inside this home component (under the return in lesson-10). 
if you think about it, if you're builiding a real blog website you might have the list of blogs in various places on your website. 
it might be in the home page or a seach page or a category page, thre's going to be several different areas which is going to use the same logic essentially where we're cycling through the blogs and outputting a blog preview for each one. 
so, if we wanted to do that, we'd essentially be repeating the 'map' code over and over again in each page. 

in our course we:
  1. create a new file in the src folder, and called it: "BlogLists.js"
  2. go to this file to see how we build the props. we create a new component, connect it with the blog data using !! Props !! and then the component have data to use the map. 
  3. import it to this file. 
  4. use it in our retrun keyword. 

Props: 
Props are a way to pass data from one component a parent component into a child component. 
in our case, the data is the perent component and the "<blogList..." is the child component. 
we want to pass the blogs data into the blogsList.js component. and the way to do that is by making a property name next to BlogList tag. 
so, you type any string you want, in our case it is going to be "blogs={dynamic value}" and into the dynamic value which is going to be the blogs list in the home component. 
now, since the data is next to the BlogList.js Component, the data is being passed into the BlogList component as a prop!! so "blogs={blogs}" is a prop!. 
now, we need to recive it inside the blog list components, and we get an automatic access to the prop in the argument area inside the BlogList component function. 
we can pass more props to the BlogList component, so let's add alos a title. 





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
    </div>
  );
}
 
export default Home;
