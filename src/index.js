import React from "react";
import ReactDOM from "react-dom";
import { applyRouterMiddleware, Router } from "react-router";
import { Provider } from "react-redux";
import createStore from "store";
import reducer from "reducer";
import useScroll from "react-router-scroll";
import routes from "routes";
import { hashHistory } from "react-router";
import { resetGame } from "actions/game";

import "styles";

const EMPTY_LOCATION = {
  location: {},
};

// Render application
// Apply useScroll middleware with custom comparison function to maintain
// Default browser scroll behaviour on navigation
const run = (store) => {
  // const hist = history(store);

  store.dispatch(resetGame());

  ReactDOM.render(
    <Provider store={store}>
      <Router
        history={hashHistory}
        render={
          applyRouterMiddleware(
            useScroll((prev, next) => {
              const { location: prevLocation } = prev || EMPTY_LOCATION;
              const { location } = next || EMPTY_LOCATION;
              return prevLocation.pathname !== location.pathname;
            })
          )}
      >
        {routes}
      </Router>
    </Provider>,
    document.getElementById("app"),
  );
};

createStore(reducer).then(store => {
  if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("reducer", () => {
      store.replaceReducer(require("reducer").default);
    });
  }
  run(store);
});
