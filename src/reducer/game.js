import * as actions from "actions/game";

const DEFAULT_STATE = {
  message: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case actions.GAMEOVER: {
    return {
      message: "GAME OVER! You failed...",
    };
  }

  case actions.GAMEWIN: {
    return {
      message: "Congratulations! You've won.",
    };
  }

  case actions.RESET_GAME:
    return DEFAULT_STATE;

  default: {
    return state;
  }}
};
