import React from "react";
import { storiesOf } from "@kadira/storybook";
import Pin from "components/Pin";


storiesOf("Pin", module)
  .add("default", () => (
    <Pin
      color={"red"}
    />
  ));
