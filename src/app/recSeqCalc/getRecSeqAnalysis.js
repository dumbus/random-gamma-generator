import { getRecSeqStates } from './getRecSeqStates.js';
import { getNotRepeatedStates } from '../utils/getNotRepeatedStates.js';

const getRecSeqAnalysis = (recSeq) => {
  const recSeqStates = getRecSeqStates(recSeq);

  // get period of recurrent sequence
  const recSeqPeriod = recSeq.length;

  // get recurrent sequence balance
  const recSeqBalance = {
    zeroes: 0,
    ones: 0
  };

  for (let i = 0; i < recSeq.length; i++) {
    if (recSeq[i] === '0') recSeqBalance.zeroes++;

    if (recSeq[i] === '1') recSeqBalance.ones++;
  }

  // get recurrent sequence series lengths
  const recSeqSeriesLength = [];

  let currentSeriesLength = 1;

  for (let i = 0; i < recSeq.length; i++) {
    if (recSeq[i] === recSeq[i + 1]) {
      currentSeriesLength++;
    } else {
      recSeqSeriesLength.push(currentSeriesLength);
      currentSeriesLength = 1;
    }
  }

  // get number of recurrent sequence series lengths in format: { 'length of series': 'number od series that length' }
  const recSeqSeries = {};

  for (let i = 0; i < recSeqSeriesLength.length; i++) {
    const currentLengthKey = recSeqSeriesLength[i].toString();

    if (currentLengthKey in recSeqSeries) {
      recSeqSeries[currentLengthKey]++;
    } else {
      recSeqSeries[currentLengthKey] = 1;
    }
  }

  // check if "window" property is fulfilled
  const uniqueStates = getNotRepeatedStates(recSeqStates);

  const numberOfUniqueStates = uniqueStates.length;
  const numberOfStates = recSeqStates.length;

  const windowProperty = {
    recSeqStates,
    numberOfStates,
    numberOfUniqueStates,
    isFulfilled: true
  };

  if (numberOfUniqueStates !== numberOfStates) {
    windowProperty.isFulfilled = false;
  }

  // create object with analysis results
  const recSeqAnalysisResults = {
    recSeqPeriod,
    recSeqBalance,
    recSeqSeries,
    windowProperty
  };

  return recSeqAnalysisResults;
};

export { getRecSeqAnalysis };
