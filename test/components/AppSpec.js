/* @flow */
import React from "react";
import { shallow } from "enzyme";

import App from "components/App";

describe("<App /> Component", () => {
  it("should render a div", () => {
    const output = shallow(<App />);
    expect(output.is("div.App")).to.equal.true;
  });
});
