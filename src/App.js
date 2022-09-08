import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions';

const Display = ({ count }) => <h1>Valor del contador: {count}</h1>;

const Increment = ({ increment }) => (  
  <button onClick={() => increment()}>Sumar 1</button>
); 
const Decrement = ({ decrement }) => (  
  <button onClick={() => decrement()}>Restar 1</button>
); 

const App = () => {
  const count = useSelector(store => store.count);
  const dispatch = useDispatch();
  return (    
    <>         
      <Display count={count} />
      <Increment increment={() => dispatch(actions.increment())} />
      <Decrement decrement={() => dispatch(actions.decrement())} />
    </>  
  );
}; 

export default App;
