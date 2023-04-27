const getRecSeq = (recSeqIterations) => {
  const periodLength = recSeqIterations.length;

  let recSeq = '';

  for (let i = 0; i < periodLength; i++) {
    recSeq = recSeqIterations[i] + recSeq;
  }

  return recSeq;
};

export { getRecSeq };
