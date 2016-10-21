// import config from "config";
// import { browserHistory, hashHistory } from "react-router";
import { createStore, compose, applyMiddleware } from "redux";
// import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";

// import { storage, engine, middleware as remember } from "storage";


// const history = config("useHash") ? hashHistory : browserHistory;
// const location = routerMiddleware(history);
export default async (reducer, initialState) => {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension({
    }) : f => f
  ));
 // const loader = storage.createLoader(engine);
  // const state = await loader(store); // eslint-disable-line no-unused-vars
  // // Process anything that needs to be done with loaded state here



  return store;
};
