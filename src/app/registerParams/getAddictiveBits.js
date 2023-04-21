const getAddictiveBits = (binaryPolynomial) => {
  const valuablePolynomial = binaryPolynomial.slice(1);
  const addictiveBitsIndexes = [];

  for (let i = 0; i < valuablePolynomial.length; i++) {
    if (valuablePolynomial[i] === '1') {
      addictiveBitsIndexes.push(i);
    }
  }

  return addictiveBitsIndexes;
};

export { getAddictiveBits };
