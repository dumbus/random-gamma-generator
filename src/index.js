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
import { getRecSeqStates } from './app/recSeqCalc/getRecSeqStates.js';

import { printResults } from './app/messenger.js';

let isDataValid = false;

let data;

while (!isDataValid) {
  data = await getData();

  isDataValid = validateData(data);
}

const { polynomial, listNumber, randomNumber, nodes } = data;

const binaryPolynomial = getBinaryPolynomial(polynomial);
const startState = getStartState(listNumber, randomNumber);
const addictiveBits = getAddictiveBits(binaryPolynomial);

const period = getPeriod(startState, addictiveBits);
const periodStates = getPeriodStates(period);
const periodSums = getPeriodSums(period);

const recSeqRegister = getRecSeq(periodSums);
const recSeqRegisterStates = getRecSeqStates(recSeqRegister);

const isPeriodValid = validatePeriod(polynomial, periodStates);

// const nodesResults = getNodesResults(nodes, period);

// console.log(nodesResults);

if (isPeriodValid) {
  printResults(polynomial, listNumber, randomNumber, period, recSeqRegister, nodes);

  // await getExitCommand();
}
