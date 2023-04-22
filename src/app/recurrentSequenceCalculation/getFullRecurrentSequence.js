const getFullRecurrentSequence = (recurrentSequence) => {
  let fullRecurrentSequence = '';

  for (let i = 0; i < 31; i++) {
    const recurrentSequencePeriod = recurrentSequence.length;
    const index = i % recurrentSequencePeriod;

    fullRecurrentSequence = fullRecurrentSequence + recurrentSequence[index];
  }

  return fullRecurrentSequence;
};

export { getFullRecurrentSequence };
