export const GAMEOVER = "GAMEOVER";
export const gameover = () => {
  return {
    type: GAMEOVER,
    // loose,
  };
};

export const GAMEWIN = "GAMEWIN";
export const gamewin = () => {
  return {
    type: GAMEWIN,
    // won,
  };
};

export const RESET_GAME = "RESET_GAME";
export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};
