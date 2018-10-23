import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer() {
  // returns undefined
  return {
    count: 42
  };
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));


