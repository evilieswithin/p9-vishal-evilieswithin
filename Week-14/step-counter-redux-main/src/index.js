import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import StepCounter from "./StepCounter";
import reducer from "./reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <StepCounter />
  </Provider>,
  document.getElementById("root")
);
