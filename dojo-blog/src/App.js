/*
Lesson 7 - Click Events

there are loads of different events going on inside the website when a user browses. 
things like hover events, or click events or or form submission events, keyboard events, scroll events, loads and loads. 
now, in this video we're going to look at click events, which is when a user clicks on something.
please go to the home component to see the click event. 

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
