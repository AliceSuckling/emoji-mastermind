/* @flow */
import React from "react";

export type PropTypes = {
  message?: string,
  onReset?: Function,
};

const Message = ({ message, onReset }: PropTypes) => {
  return (
    <div className="Board__message">
      <div>{message}</div>
      {message ?
        <button className="Board__message__reset__button"onClick={onReset}>
        Reset
        </button> : null}
    </div>
  );
};

export default Message;
