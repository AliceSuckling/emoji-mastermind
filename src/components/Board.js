/* @flow */
import React from "react";
import Pin from "./Pin";
import classnames from "classnames";
import Check from "./Check";
import Message from "./Message";

type PropTypes = {
  rows: Array,
  answer: Array<string>,
  check: Function,
  guess: Array<Pin>,
  changePin: Function,
  message: string,
  clues: Object,
  onReset: Function,
};

const Board = ({
  rows,
  guess,
  check,
  changePin,
  message,
  clues,
  onReset,
}: PropTypes) => {
  return (
    <div>
      <table className="Board">
        <tbody className="Board__guess">
        {rows.map((row, index ) => (
          <tr
            className="Board__guess__row"
            key={index}
          >
            {row.map((color, index) => (
              <Pin color={color} key={index} />
            ))}
            <td>
              <Check black={clues[index].black} red={clues[index].red}/>
            </td>
          </tr>
        ))}
          <tr>
            <td
              className={classnames(
                `Board__guess__row__column
                  Board__guess__row__column--active
                  Board__guess__row__column--${guess[0]}`
              )}
              onClick={() => changePin(0)}
            >Click</td>
            <td
              className={classnames(
                `Board__guess__row__column
                  Board__guess__row__column--active
                  Board__guess__row__column--${guess[1]}`
              )}
              onClick={() => changePin(1)}
            >Click</td>
            <td
              className={classnames(
                `Board__guess__row__column
                  Board__guess__row__column--active
                  Board__guess__row__column--${guess[2]}`
              )}
              onClick={() => changePin(2)}
            >Click</td>
            <td
              className={classnames(
                `Board__guess__row__column
                  Board__guess__row__column--active
                  Board__guess__row__column--${guess[3]}`
              )}
              onClick={() => changePin(3)}
            >Click</td>
          </tr>
        </tbody>
      </table>
      <button className="Board__guess__button" onClick={check}>
        Check
      </button>
      <Message message={message} onReset={onReset} />
    </div>
  );
};

export default Board;
