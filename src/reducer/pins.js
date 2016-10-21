import * as actions from "actions/pins";
import { calculate } from "helpers/redAndBlack";
import { RESET_GAME } from "actions/game";
import answer from "./answer";

const DEFAULT_STATE = {
  rows: [],
  answer: [0, 0, 0, 0],
  guess: [0, 0, 0, 0],
  clues: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case RESET_GAME:
    return {
      ...DEFAULT_STATE,
      answer: answer(),
    };
  case actions.CHANGE_PIN: {
    const { position } = action;
    const current = state.guess[position];
    const newGuess = state.guess.slice(0);
    const next = (current + 1) % 4;
    newGuess[position] = next;
    return {
      ...state,
      guess: newGuess,
    };
  }

  case actions.ADD_GUESS_TO_ROWS: {
    const guess = state.guess;
    const answer = state.answer;
    const clues = calculate(guess, answer);
    return {
      ...state,
      rows: [...state.rows, state.guess],
      guess: [0, 0, 0, 0],
      clues: [...state.clues, clues],
    };
  }

  default: {
    return state;
  }}
};
