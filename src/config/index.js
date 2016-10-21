import { fromJS } from "immutable";
const config = fromJS(require(`./${process.env.NODE_ENV}`).default);

export default key => {
  if (key) {
    return config.getIn(key.split("."));
  }

  return config;
};

