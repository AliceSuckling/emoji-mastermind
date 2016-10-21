import React from "react";
import { IndexRoute, Route } from "react-router";
import App from "components/App";

import * as pages from "containers/pages";

export default (
  <Route component={App} path="/">
    <IndexRoute component={pages.Home} />
  </Route>
);
