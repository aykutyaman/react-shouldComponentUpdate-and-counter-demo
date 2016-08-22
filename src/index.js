import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'

function counter(state = 1, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter);

setInterval(() => {
  store.dispatch({ type: 'INCREMENT' })
}, 500);

const render = () => {
  ReactDOM.render(
    <App counter={store.getState()} />,
    document.getElementById('root')
  );
}

store.subscribe(() => {
  render();
});
