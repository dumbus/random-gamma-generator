import { getData } from './app/utils/getData.js';
import { dataValidator } from './app/utils/validator.js';

import { getBinaryPolynomial } from './app/registerParamsCalc/getBinaryPolynomial.js';
import { getStartState } from './app/registerParamsCalc/getStartState.js';
import { getAddictiveBits } from './app/registerParamsCalc/getAddictiveBits.js';

import { findAllPeriods } from './app/periodsCalc/findAllPeriods.js';
import { getRecSeqData } from './app/recSeqCalc/getRecSeqData.js';
import { analyzeRecSeq } from './app/recSeqCalc/analyzeRecSeq.js';

// import { findRecurrentSequence } from './app/recSeqCalc/findRecSeq.js';
// import { getFullRecurrentSequence } from './app/recSeqCalc/getFullRecurrentSequence.js';

let isDataValid = false;

let data;

while (!isDataValid) {
  data = await getData();

  isDataValid = dataValidator(data);
}

const { polynomial, listNumber } = data;

const binaryPolynomial = getBinaryPolynomial(polynomial);
const startState = getStartState(listNumber);
const addictiveBits = getAddictiveBits(binaryPolynomial);

console.log(`Binary polynomial: ${binaryPolynomial}`); // print to user
console.log(`Start state: ${startState}`); // print to user

const allPeriods = findAllPeriods(startState, addictiveBits); // print to user

// console.log(allPeriods);

const reqSecData = getRecSeqData(allPeriods);

console.log(reqSecData);

const reqSecAnalysisData = analyzeRecSeq(reqSecData);

console.log(reqSecAnalysisData);

// const fullRecurrentSequence = getFullRecurrentSequence(recurrentSequence);

// const fullRecurrentSequence = getFullRecurrentSequence(recurrentSequence);

// console.log(fullRecurrentSequence);

