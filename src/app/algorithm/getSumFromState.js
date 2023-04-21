const getSumFromState = (state, addictiveBitsIndexes) => {
  let sum = 0;

  for (let i = 0; i < addictiveBitsIndexes.length; i++) {
    sum += state[addictiveBitsIndexes[i]];
  }

  const resultSum = (sum % 2).toString();

  return resultSum;
};

export { getSumFromState };
