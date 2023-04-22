import { getLongestPeriod } from '../utils/getLongestPeriod.js';

const getRecSeqData = (allPeriods) => {
  const longestPeriod = getLongestPeriod(allPeriods);

  let recSeq = '';

  for (let i = 0; i < longestPeriod.length; i++) {
    recSeq = longestPeriod[i].sum + recSeq;
  }

  const states = [];

  for (let i = 0; i < longestPeriod.length; i++) {
    states.push(longestPeriod[i].state);
  }

  const data = { recSeq, states };

  return data;
};

export { getRecSeqData };
