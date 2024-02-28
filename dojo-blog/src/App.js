import './App.css';

/*
the App component, is also called the root component, meaning this is the only component which is being randered to the dom. 
inside this comp, we can see is basically a function called App. and that returns what looks like some html code. 
this function, could be an arrow func, but !! it has to start with a capital letter. so app will not work, but App will work. 
in addition, in the return it looks like an html, but it not. it's called jsx, which has a syntax almost identical to html but there are some differences which we're going to learn later. 
JSX allows us to easily create these html style templates and components and in the background a transpiler called bable, converts all of this jsx template into html when we save the file, and it renders that html to the dom. 
one big difference between jsx and html is the way we add classes to elements because in jsx we use ClassName and not Class, because class is a reserved keyword in JS and at the end of the day we're in a JS file. when it's converted to html, it changes this attribute into just class. in the browser dev tools if you'll go to the elements you'll see it's converred to class.

In a nutshell, a component is a function and then we always must return something inside that function and that's going to be a jsx template. then in the bottom, we export that component so we can use it elseehre as well. 
*/
function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
