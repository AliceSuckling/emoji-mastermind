import config from "config";
import { hashHistory, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";


let history = null;
export default store => {
  if (history) {
    return history;
  }

  const use = config("useHash") ? hashHistory : browserHistory;

  return history = syncHistoryWithStore(use, store, {
    selectLocationState: state => state.routing,
  });

};
