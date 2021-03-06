import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./Counter";
import { createStore } from "redux"; // used to create store
import { Provider } from "react-redux";

const initialState = {
  count: 0
};

// decides what our initial state is 
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
