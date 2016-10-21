import { combineReducers } from "redux";

import routing from "./routing";
import pins from "./pins";
import game from "./game";

import { storage, merger } from "storage";

export default storage.reducer(combineReducers({
  routing,
  pins,
  game,
}), merger);
