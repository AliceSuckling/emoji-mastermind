import React from "react";
import { storiesOf } from "@kadira/storybook";
import App from "components/App";



storiesOf("App", module).
  add("default state", () => (
    <App />
  ));
