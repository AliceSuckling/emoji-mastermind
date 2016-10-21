export default (length = 4) => {
  const answer = [];
  for (let i = 0; i < length; i++) {
    answer.push(Math.floor(Math.random() * 4));
  }
  return answer;
};
