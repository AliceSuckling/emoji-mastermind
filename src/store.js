import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default async (reducer, initialState) => {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension({
    }) : f => f
  ));
  return store;
};
