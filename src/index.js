import { getData, getExitCommand } from './app/utils/getUserInput.js';
import { validateData } from './app/validator.js';

import { getBinaryPolynomial } from './app/registerParamsCalc/getBinaryPolynomial.js';
import { getStartState } from './app/registerParamsCalc/getStartState.js';
import { getAddictiveBits } from './app/registerParamsCalc/getAddictiveBits.js';

import { findAllPeriods } from './app/periodCalc/findAllPeriods.js';
import { findLongestPeriod } from './app/periodCalc/findLongestPeriod.js';
import { getPeriodSums } from './app/periodCalc/getPeriodSums.js';
import { getNodesResults } from './app/nodesCalc/getNodesResults.js';

import { getRecSeq } from './app/recSeqCalc/getRecSeq.js';

import {
  printRegisterParametersData,
  printAllPeriodsTable,
  printRecSeqAnalysisResults,
  printNodesTable,
  printSequences
} from './app/messenger.js';

let isDataValid = false;

let data;

while (!isDataValid) {
  data = await getData();

  isDataValid = validateData(data);
}

const { polynomial, startNumber, nodes } = data;

const binaryPolynomial = getBinaryPolynomial(polynomial);
const startState = getStartState(startNumber);
const addictiveBits = getAddictiveBits(binaryPolynomial);

const allPeriods = findAllPeriods(startState, addictiveBits);

const longestPeriod = findLongestPeriod(allPeriods);
const longestPeriodSums = getPeriodSums(longestPeriod);
const recSeqRegister = getRecSeq(longestPeriodSums);

const nodesResults = getNodesResults(longestPeriod, nodes);
const firstNodeSequence = getRecSeq(nodesResults[0]);
const secondNodeSequence = getRecSeq(nodesResults[1]);
const thirdNodeSequence = getRecSeq(nodesResults[2]);

printRegisterParametersData(polynomial, binaryPolynomial, startNumber, startState, nodes);
printAllPeriodsTable(allPeriods);
printRecSeqAnalysisResults(recSeqRegister, 'register');
printNodesTable(longestPeriod, nodesResults);
printSequences(recSeqRegister, firstNodeSequence, secondNodeSequence, thirdNodeSequence);
printRecSeqAnalysisResults(thirdNodeSequence, 'nodes');

await getExitCommand();
