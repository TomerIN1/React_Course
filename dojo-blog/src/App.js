/*
Lesson 6 - Adding Styles

To add styles for the components we can use the index.css file in the src folder. 
the css file will hold all the styles of the components. so for the App, Home and Navbar components we will update their style in the css file.
for larger projects we can split the css files to handle multiple components.
if you are doing a small project then use a single css file. 

in the index.css is imported into the index.js file and it take all of those styles and adds them inside the head webpage. 
go to the css file and see how to use css for the className objects in each components. 



*/

import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
