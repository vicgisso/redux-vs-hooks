import React from 'react';

const Display = ({ counter }) => <h1>Valor del contador: {counter}</h1>;

const Increment = ({ addToCounter }) => (  
  <button onClick={() => addToCounter(1)}>Sumar 1</button>
); 
const Decrement = ({ addToCounter }) => (  
  <button onClick={() => addToCounter(-1)}>Restar 1</button>
); 

const App = () => {  
  const [counter, setCounter] = React.useState(0);  
  const addToCounter = value => setCounter(counter + value);  
  return (    
    <>      
      <h1>useReducer</h1>      
      <Display counter={counter} />      
      <Increment addToCounter={addToCounter} />      
      <Decrement addToCounter={addToCounter} />    
    </>  
  );
}; 

export default App;
