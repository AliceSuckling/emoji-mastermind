import React from "react";
import { storiesOf } from "@kadira/storybook";
import Answer from "components/Answer";


storiesOf("Answer", module)
  .add("default", () => (
    <Answer
      answer={["red", "yellow", "yellow", "green"]}
    />
  ));
