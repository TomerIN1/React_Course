/**
Lesson 8 - Using State (UseState hook). 
link to video: https://www.youtube.com/watch?v=4pO-HcG2igk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=9

in our project so far we haven't talked about state or data. 
when we talk about the state of a component we mean the data being used in that component at that point in time. 
that state could be an array of values, booleans, strings, objects or any other data that our component uses. 

we already created some variable and we used them in our templates before, but what if we had variables or data that we wanted to change over time or in reaction to some event like a user clicking a button? 
in order to update a variable we need to change it from a stable state into a reactive state. we need to thing about how to trigger react to re-render the new value that comes from the function. 
in order for this to work, we have to make the value reactive, so that when it changes react detects taht and it re-renders the template where we output that value and we see the new value in the browser. 

now, to do this in react we use something called a hook. and taht hook is called use state. 
hook in react is a special type of function that does a certain job. you can tell a hook by its name because it it starts with the work 'use'. 
the useState hook gives us a way to make a reactive vlaue and also provides us with a way to change that value whenever we want. 

How to Utilize the `useState` Hook in React:
  1. **Importing `useState`**: Begin by importing the `useState` hook into your file. Use the following syntax: `import { useState } from "react";`.
  2. **Invoking `useState`**: Within your functional component, invoke the `useState` function like so: `useState('initial value');`. It's crucial to note that merely invoking `useState` is not enough; you must store its returned value for further use.
  3. **Storing State with Destructuring**: `useState` returns an array of two elements, and we utilize array destructuring to access these values:
    - The first element represents the current state value, which you can name arbitrarily. In this example, we'll name it `name`.
    - The second element is a function that updates this state value, typically prefixed with 'set' followed by the state variable's name. Here, we'll name it `setName`.
  4. **Example Code**: Incorporating the above steps, the code to initialize state with `useState` would be: `const [name, setName] = useState('mario');`.
  5. **Updating State**: To update the state in response to an event, such as a button click, define a function that calls `setName`. This updates the `name` state, making it reactive.
  6. **Rendering State in the Template**: Now, you can use `{name}` in your JSX template. Whenever `name` is updated, the component re-renders, reflecting the new value in the UI.

Note: the value can be any data type value (boolean, object, array, numbers, strings etc..)


 */

import { useState } from "react";

const Home = () => {
  // let name = 'mario';
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'luigi';
    setName('luigi');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;

/*
In React, you can handle various user interactions and browser events using specific event handlers.
Here are some of the most commonly used event handlers in React, corresponding to their native JavaScript counterparts:

1. **Mouse Events:**
   - `onClick`: Triggered when an element is clicked.
   - `onDoubleClick`: Triggered when an element is double-clicked.
   - `onMouseDown`: Triggered when the mouse button is pressed down on an element.
   - `onMouseEnter`: Triggered when the mouse pointer enters the element.
   - `onMouseLeave`: Triggered when the mouse pointer leaves the element.
   - `onMouseMove`: Triggered when the mouse pointer is moving over an element.
   - `onMouseOut`: Triggered when the mouse pointer moves out of an element.
   - `onMouseOver`: Triggered when the mouse pointer is moved over an element.
   - `onMouseUp`: Triggered when a mouse button is released over an element.

2. **Keyboard Events:**
   - `onKeyDown`: Triggered when a key is pressed down.
   - `onKeyPress`: Triggered when a key is pressed and released.
   - `onKeyUp`: Triggered when a key is released.

3. **Form Events:**
   - `onChange`: Triggered when the value of a form element (input, select, textarea) changes.
   - `onInput`: Triggered when an input element receives user input.
   - `onSubmit`: Triggered when a form is submitted.
   - `onFocus`: Triggered when an element gains focus.
   - `onBlur`: Triggered when an element loses focus.

4. **Touch Events:**
   - `onTouchStart`: Triggered when a touch is initiated.
   - `onTouchMove`: Triggered when a touch point is moved along the touch surface.
   - `onTouchEnd`: Triggered when a touch point is removed from the touch surface.

5. **Clipboard Events:**
   - `onCopy`: Triggered when the user copies the content of an element.
   - `onCut`: Triggered when the user cuts the content of an element.
   - `onPaste`: Triggered when the user pastes content into an element.

6. **Drag Events:**
   - `onDrag`: Triggered when an element is being dragged.
   - `onDragEnd`: Triggered when a drag operation ends.
   - `onDragEnter`: Triggered when a dragged element enters a valid drop target.
   - `onDragExit`: Triggered when an element is no longer the drag operation's immediate selection target.
   - `onDragLeave`: Triggered when a dragged element leaves a valid drop target.
   - `onDragOver`: Triggered when an element is being dragged over a valid drop target.
   - `onDragStart`: Triggered when the user starts to drag an element.
   - `onDrop`: Triggered when the dragged element is dropped on a valid drop target.

7. **UI Events:**
   - `onScroll`: Triggered when an element's scrollbar is being scrolled.

8. **Wheel Events:**
   - `onWheel`: Triggered when the mouse wheel rolls up or down over an element.

These event handlers can be used to add interactive functionality to your React components, responding to user actions and browser events efficiently.

*/
