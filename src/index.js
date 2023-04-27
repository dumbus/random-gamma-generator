import { getData, getExitCommand } from './app/utils/getUserInput.js';
import { validateData, validatePeriod } from './app/validator.js';

import { getBinaryPolynomial } from './app/registerParamsCalc/getBinaryPolynomial.js';
import { getStartState } from './app/registerParamsCalc/getStartState.js';
import { getAddictiveBits } from './app/registerParamsCalc/getAddictiveBits.js';

import { getPeriod } from './app/periodCalc/getPeriod.js';
import { getPeriodStates } from './app/periodCalc/getPeriodStates.js';
import { getPeriodSums } from './app/periodCalc/getPeriodSums.js';
import { getNodesResults } from './app/nodesCalc/getNodesResults.js';

import { getRecSeq } from './app/recSeqCalc/getRecSeq.js';

import {
  printVariantData,
  printStartData,
  printPeriodTable,
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

const period = getPeriod(startState, addictiveBits);
const periodStates = getPeriodStates(period);
const periodSums = getPeriodSums(period);
const recSeqRegister = getRecSeq(periodSums);

const isPeriodValid = validatePeriod(polynomial, periodStates);

const nodesResults = getNodesResults(period, nodes);

const firstNodeSequence = getRecSeq(nodesResults[0]);
const secondNodeSequence = getRecSeq(nodesResults[1]);
const thirdNodeSequence = getRecSeq(nodesResults[2]);

if (isPeriodValid) {
  printVariantData(polynomial, startNumber, startState, nodes);
  printStartData(polynomial, startNumber);
  printPeriodTable(period);
  printRecSeqAnalysisResults(recSeqRegister, 'register');
  printNodesTable(period, nodesResults);
  printSequences(recSeqRegister, firstNodeSequence, secondNodeSequence, thirdNodeSequence);
  printRecSeqAnalysisResults(thirdNodeSequence, 'nodes');

  await getExitCommand();
}
