/**
lesson number 4 - dynamic values in templates

Another good thing about jsx templates in react is that we can output dynamic values or variables inside it. 
we can output a variable in the return div. we can create the variable inside the function before the return template. 
what is the process? 
  1. create the variable or function before the return template. 
  2. use curly braces in order to use this variable in the return template. 
  3. react is going to convert whaever data type that we use to a string before it outputs it to the browser. 

Notes:
  1. the only thing we can't output are booleans or objects. 
  2. we can also write dynamic values inside the curly braces. we can write any of JS statement inside the curly braces. 
  

 */

import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
