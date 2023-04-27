const getRecSeqStates = (recSeq) => {
  const recSeqExtended = recSeq + recSeq.substring(0, 5);
  const numberOfStates = recSeq.length;

  const recSeqStates = [];

  for (let i = 0; i < numberOfStates; i++) {
    const currentState = recSeqExtended.substring(i, i + 5);

    recSeqStates.push(currentState);
  }

  return recSeqStates;
};

export { getRecSeqStates };
