
export const calculate = (guess, answer) => {
  let red = 0, black = 0;
  const redAwarded = [], blackAwarded = [];
  for (const [index, pin] of guess.entries()) {
    const correct = answer[index];
    if (correct === pin) {
      black++;
      blackAwarded.push(index);
    }
  }

  for (const [index, pin] of guess.entries()) {
    let startFrom = 0;
    // eslint-disable-next-line
    while (true) {
      const found = answer.indexOf(pin, startFrom);
      if (found > -1) {
        if (blackAwarded.indexOf(found) > -1) {
          if (found === index) {
            break;
          }
          startFrom = found + 1;
          continue;
        }
        if (redAwarded.indexOf(found) > -1) {
          startFrom = found + 1;
          continue;
        }
        red++;
        redAwarded.push(found);
        break;
      } else {
        break;
      }
    }
  }
  return {
    black,
    red,
  };
};

