const getNotRepeatedStates = (recSeqStates) => {
  const numberOfStates = {};

  for (let i = 0; i < recSeqStates.length; i++) {
    const currentState = recSeqStates[i];

    if ((Object.keys(numberOfStates)).includes(currentState)) {
      numberOfStates[currentState] += 1;
    } else {
      numberOfStates[currentState] = 1;
    }
  }

  const notRepeatedStates = [];

  const statesEntries = Object.entries(numberOfStates);

  for (const [key, value] of statesEntries) {
    if (value === 1) notRepeatedStates.push(key);
  }

  return notRepeatedStates;
};

export { getNotRepeatedStates };