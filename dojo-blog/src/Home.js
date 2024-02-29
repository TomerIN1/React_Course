/*
here we add a click events. 
  1. in the template of the component we create a button. we want to react to a user clicking on this button and fire a function when they do that. 
  2. first we will create the function inside the home component (and outside the return). 
  3. in the template we type onClick = {} and pass in a dynamic value which is in this case the function's name. 
*/

const Home = () => {

  const handleClick = (e) => { //name of functino handleClick. e = event. when e of click thenn console.log string + add the event object to the log.  
    console.log('hello ninjas', e);
  }

  //this is how to use a function with a parameter we need to pass into the function. in order to invoke this function in the template, we need to wrapp this function with an arrow function.if we will not wrapp it, the the function will be fire before the user click on the button.  
  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
    </div>
  );
}
 
export default Home;
