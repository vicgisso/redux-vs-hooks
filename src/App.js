import React, { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_COUNTER": {
      return {
        ...state,
        counter: state.counter + action.value
      };
    }
    default:
      return state;
  }
};

const initialState = {
  counter: 0
};

const CounterContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};

const Display = () => {
  const { state } = useContext(CounterContext);
  return <h1>Valor del contador: {state.counter}</h1>;
};

const Increment = () => {
  const { dispatch } = useContext(CounterContext);
  return (
    <button
      onClick={() =>
        dispatch({
          type: "ADD_TO_COUNTER",
          value: 1
        })
      }
    >
      Sumar 1
    </button>
  );
};
const Decrement = () => {
  const { dispatch } = useContext(CounterContext);
  return (
    <button
      onClick={() =>
        dispatch({
          type: "ADD_TO_COUNTER",
          value: -1
        })
      }
    >
      Restar 1
    </button>
  );
};
const App = () => {
  return (
    <CounterContextProvider>
      <Display />
      <Increment />
      <Decrement />
    </CounterContextProvider>
  );
};

export default App;
