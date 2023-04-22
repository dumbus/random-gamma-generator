const getStartState = (listNumber) => {
  const binListNumber = Number(listNumber).toString(2);

  let startState = binListNumber;

  while (startState.length !== 5) {
    startState = '0' + startState;
  }

  return startState;
};

export { getStartState };
