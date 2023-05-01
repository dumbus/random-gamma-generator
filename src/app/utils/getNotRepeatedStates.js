const getNotRepeatedStates = (recSeqStates) => {
  const notRepeatedStates = [];

  for (let i = 0; i < recSeqStates.length; i++) {
    const currentState = recSeqStates[i];

    if (!notRepeatedStates.includes(currentState)) {
      notRepeatedStates.push(currentState);
    } else {
      const indexOfRepeat = notRepeatedStates.indexOf(currentState);
      notRepeatedStates[indexOfRepeat] = null;
    }
  }

  const result = notRepeatedStates.filter(state => state !== null);

  return result;
};

export { getNotRepeatedStates };
