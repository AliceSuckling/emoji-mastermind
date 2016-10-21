/* @flow */
import React from "react";

type PropTypes = {
  black?: number,
  red?: number,
};

const Check = ({
  red = 0,
  black = 0,
}: PropTypes) => {
  return (
    <div className="Board__clues">
      {Array.from(Array(black)).map((v, index) =>
        <span className="Board__clues__black" key={index}>BB</span>)}
      {Array.from(Array(red)).map((v, index) =>
        <span className="Board__clues__red" key={index}>RR</span>)}
    </div>
  );
};

export default Check;


