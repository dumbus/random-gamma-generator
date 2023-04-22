import { getLongestPeriod } from '../utils/getLongestPeriod.js';

const findRecurrentSequence = (allPeriods) => {
  const longestPeriod = getLongestPeriod(allPeriods);

  let recurrentSequence = '';

  for (let i = 0; i < longestPeriod.length; i++) {
    recurrentSequence = longestPeriod[i].sum + recurrentSequence;
  }

  return recurrentSequence;
};

export { findRecurrentSequence };
