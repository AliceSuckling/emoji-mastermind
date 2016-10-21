import { configure } from "@kadira/storybook";

const loadStories = () => {
  require("babel-polyfill");
  require("isomorphic-fetch");
  require("../stories");
};

configure(loadStories, module);
