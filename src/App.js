import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

// const Display = ({ counter }) => <h1>Valor del contador: {counter}</h1>;

// const Increment = ({ increment }) => (  
//   <button onClick={() => increment()}>Sumar 1</button>
// ); 
// const Decrement = ({ decrement }) => (  
//   <button onClick={() => decrement()}>Restar 1</button>
// ); 

const App = ({ count, increment, decrement }) => {  
  return (    
    <>         
      <h1>Valor del contador: {count}</h1>     
      <button onClick={() => {console.log('increment');increment();}}>Sumar 1</button>     
      <button onClick={() => {console.log('decrement');decrement();}}>Restar 1</button> 
    </>  
  );
}; 

export default connect(
  store => ({
    count: store.count
  }),
  {
    increment: actions.increment, 
    decrement: actions.decrement
  }
)(App);
