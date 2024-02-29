/**
lesson number 5 - Multiple Components. 

So far, we have single component in our app, which is the App component. 
this is known as the toot component of the application meaning it the first component that gets rendered to the dom and it sits at the very top of our application. it's the thing that the index file render in the reactDOM. 

in react applications our components are structured in a way that makes up a component tree. the root component sits at the top of this tree and this is the component that is initially rendered inside our html file. in our case that component is called app.js. 
then if we were to make more components we nest them inside this root one, so if we make components for a navbar, blog details, sidebar... of of those components would be nested inside this root app component. 
and if we make further components then they could be nested inside each one of the navbar, blog and sidebar comp. so, this makes up our comp tree. see components tree pic 1. 

we are goint to start by just make a navbar comp which will sit inside our root app component at the top. to create a new component please follow these steps:
  1. create a new file inside the src folder and called it Navbar.js (remember, a comp is just a function which returns a jsx template and that function is exported at the bottom of the file). 
  2. use the package simple react snippets. use can use it to create a functional comp. type: "sfc + Tab"
  3. create your jsx template in the Navbar component. see full code in Navbar.js file in the src folder. 
  4. when finish create the component, go back to the App.js root component, import it and then implement it in the App template. 

 */

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Sidebar from './Sidebar';

function App() {
    return (
    <div className="App">
<Navbar />
      <div className="content">
        <Home />
        <Sidebar / >
      </div>
    </div>
  );
}

export default App;
