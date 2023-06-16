import React, { useReducer } from 'react';

// useReducer is a hook to use when you have complex state logic.
// const [state, dispatch] = useReducer(reducer, initialValue)
// dispatch is used to dispatch actions - dispatch(action)
// the action is caught in the reducer. The reducer takes 2 params, state & action
// state is the value of store, initialized by the initialValue parameter
// action is an object which contains type and additional information(usually named payload), to be passed in dispatch.

export function App(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT': return state + 1;
      case 'DECREMENT': return state - 1;
      default: return state;
    }
  }
  const [num, dispatch] = useReducer(reducer, 0);

  const increment = () => {
    dispatch({type: 'INCREMENT'});
  }
  const decrement = () => {
    dispatch({type: 'DECREMENT'});
  }
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>{num}</h2>
      <div>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
      </div>
    </div>
  );
}