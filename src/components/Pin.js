/* @flow */
import React from "react";
import classnames from "classnames";

type PropTypes = {
  color: string,
  changeColor?: Function,
};

const Pin = ({ color }: PropTypes) => {
  return (
    <td
      className={
        classnames(
          "Board__guess__row__column",
          `Board__guess__row__column--${color}`
        )}
    >
    </td>
  );
};

export default Pin;
