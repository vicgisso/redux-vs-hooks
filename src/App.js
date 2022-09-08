import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

const Display = ({ count }) => <h1>Valor del contador: {count}</h1>;

const Increment = ({ increment }) => (  
  <button onClick={() => increment()}>Sumar 1</button>
); 
const Decrement = ({ decrement }) => (  
  <button onClick={() => decrement()}>Restar 1</button>
); 

const App = ({ count, increment, decrement }) => {  
  return (    
    <>         
      <Display count={count} />
      <Increment increment={increment} />
      <Decrement decrement={decrement} />
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
