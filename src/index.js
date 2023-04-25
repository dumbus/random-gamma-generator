import { getData, getExitCommand } from './app/utils/getUserInput.js';
import { validateData } from './app/utils/validator.js';

import { getBinaryPolynomial } from './app/registerParamsCalc/getBinaryPolynomial.js';
import { getStartState } from './app/registerParamsCalc/getStartState.js';
import { getAddictiveBits } from './app/registerParamsCalc/getAddictiveBits.js';

import { findAllPeriods } from './app/periodsCalc/findAllPeriods.js';
// import { getRecSeqData } from './app/recSeqCalc/getRecSeq.js';
// import { analyzeRecSeq } from './app/recSeqCalc/analyzeRecSeq.js';

// import { printVariantData, printAllPeriods, printRecSeqAnalysisResults, printStartData, } from './app/utils/messenger.js';
import { printAllPeriodsData } from './app/utils/messenger.js';

let isDataValid = false;

let data;

while (!isDataValid) {
  data = await getData();

  isDataValid = validateData(data);
}

const { polynomial, listNumber } = data;

const binaryPolynomial = getBinaryPolynomial(polynomial);
const startState = getStartState(listNumber);
const addictiveBits = getAddictiveBits(binaryPolynomial);

const allPeriods = findAllPeriods(startState, addictiveBits);

// const reqSecData = getRecSeqData(allPeriods);
// const reqSecAnalysisData = analyzeRecSeq(reqSecData);

// printVariantData(polynomial, listNumber, binaryPolynomial, startState);
// printAllPeriods(allPeriods);
// printRecSeqAnalysisResults(reqSecAnalysisData);

// printStartData(polynomial, listNumber, startState);

printAllPeriodsData(allPeriods);

await getExitCommand();
