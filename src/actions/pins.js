import { gameover, gamewin } from "./game";

export const CHANGE_PIN = "CHANGE_PIN";
export const changePin = (position) => {
  return {
    type: CHANGE_PIN,
    position,
  };
};

export const ADD_GUESS_TO_ROWS = "ADD_GUESS_TO_ROWS";
export const addGuessToRows = () => {
  return {
    type: ADD_GUESS_TO_ROWS,
  };
};

export const CHECK_GUESS = "CHECK_GUESS";
export const checkGuess = () => {
  return (dispatch, getState) => {
    const { pins: { guess, answer, rows }} = getState();
    let correct = false;
    if (rows.length > 10) {
      dispatch(gameover(true));
    } else if (guess.join("") === answer.join("")) {
      correct = true;
    } else {
      dispatch(addGuessToRows());
    }
    if (correct) {
      dispatch(gamewin(true));
    }
  };
};
