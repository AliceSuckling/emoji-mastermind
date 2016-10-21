/* @flow */
import React from "react";
import { connect } from "react-redux";

import Board from "components/Board";

import { changePin, checkGuess } from "actions/pins";
import { resetGame } from "actions/game";

type PropTypes = {
  rows: [],
  answer: [],
  changePin: Function,
  guess: [],
  checkGuess: Function,
  message: string,
  clues: [],
  resetGame: Function,
};

export class Home extends React.Component {
  props: PropTypes;
  static defaultProps = {
    rows: [],
    answer: [],
  };
  render() {
    const {
      resetGame,
      rows,
      answer,
      clues,
      changePin,
      guess,
      checkGuess,
      message,
    } = this.props;
    return (
      <Board
        answer={answer}
        changePin={changePin}
        check={checkGuess}
        clues={clues}
        guess={guess}
        message={message}
        onReset={resetGame}
        rows={rows}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    rows: state.pins.rows,
    answer: state.pins.answer,
    guess: state.pins.guess,
    clues: state.pins.clues,
    message: state.game.message,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changePin(position) {
      dispatch(changePin(position));
    },
    checkGuess() {
      dispatch(checkGuess());
    },
    resetGame: () => dispatch(resetGame()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

