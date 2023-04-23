import { getData } from './app/utils/getData.js';
import { validateData } from './app/utils/validator.js';

import { getBinaryPolynomial } from './app/registerParamsCalc/getBinaryPolynomial.js';
import { getStartState } from './app/registerParamsCalc/getStartState.js';
import { getAddictiveBits } from './app/registerParamsCalc/getAddictiveBits.js';

import { findAllPeriods } from './app/periodsCalc/findAllPeriods.js';
import { getRecSeqData } from './app/recSeqCalc/getRecSeqData.js';
import { analyzeRecSeq } from './app/recSeqCalc/analyzeRecSeq.js';

import { printVariantData, printAllPeriods, printRecSeqAnalysisResults } from './app/utils/messenger.js';

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

const reqSecData = getRecSeqData(allPeriods);
const reqSecAnalysisData = analyzeRecSeq(reqSecData);

printVariantData(polynomial, listNumber, binaryPolynomial, startState);
printAllPeriods(allPeriods);
printRecSeqAnalysisResults(reqSecAnalysisData);
