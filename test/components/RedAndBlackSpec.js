/* @flow */

import { calculate } from "helpers/redAndBlack";

describe("red and black calculator", () => {
  it("should render correct red peg value ex.1", () => {
    const answer = [0,0,1,0];
    const guess = [1,2,2,2];
    const test = calculate(guess, answer).red;
    expect(test).to.be.equal(1);
  });
  it("should render correct red peg value ex.2", () => {
    const answer = [0,1,2,3];
    const guess = [0,1,2,3];
    const test = calculate(guess, answer).red;
    expect(test).to.be.equal(0);
  });
  it("should render correct red peg value ex.3", () => {
    const answer = [1,1,2,2];
    const guess = [0,2,2,1];
    const test = calculate(guess, answer).red;
    expect(test).to.be.equal(2);
  });
  it("should render correct red peg value ex.4", () => {
    const answer = [3,1,2,1];
    const guess = [1,2,1,1];
    const test = calculate(guess, answer).red;
    expect(test).to.be.equal(2);
  });

  it("should render correct black peg value ex.1", () => {
    const answer = [0,1,2,3];
    const guess = [0,1,2,3];
    const test = calculate(guess, answer).black;
    expect(test).to.be.equal(4);
  });
  it("should render correct black peg value ex.2", () => {
    const answer = [1,1,2,1];
    const guess = [0,0,0,2];
    const test = calculate(guess, answer).black;
    expect(test).to.be.equal(0);
  });
  it("should render correct black peg value ex.3", () => {
    const answer = [1,2,2,3];
    const guess = [1,2,3,2];
    const test = calculate(guess, answer).black;
    expect(test).to.be.equal(2);
  });
  it("should render correct black and peg value ex.1", () => {
    const answer = [1,2,2,3];
    const guess = [1,2,3,2];
    const test = calculate(guess, answer);
    expect(test.red).to.be.equal(2);
    expect(test.black).to.be.equal(2);
  });
  it("should render correct black and peg value", () => {
    const answer = [1,1,2,3];
    const guess = [3,0,0,3];
    const test = calculate(guess, answer);
    expect(test.red).to.be.equal(0);
    expect(test.black).to.be.equal(1);
  });
});
