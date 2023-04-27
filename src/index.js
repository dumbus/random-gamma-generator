import { getData, getExitCommand } from './app/utils/getUserInput.js';
import { validateData, validatePeriod } from './app/validator.js';

import { getBinaryPolynomial } from './app/registerParamsCalc/getBinaryPolynomial.js';
import { getStartState } from './app/registerParamsCalc/getStartState.js';
import { getAddictiveBits } from './app/registerParamsCalc/getAddictiveBits.js';

import { getPeriod } from './app/periodCalc/getPeriod.js';
import { getPeriodStates } from './app/periodCalc/getPeriodStates.js';
import { getNodesResults } from './app/nodesCalc/getNodesResults.js';

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

const isPeriodValid = validatePeriod(period, polynomial);

const periodStates = getPeriodStates(period);
const nodesResults = getNodesResults(nodes, periodStates);

console.log(nodesResults);

if (isPeriodValid) {
  printResults(polynomial, listNumber, randomNumber, period, nodes);

  // await getExitCommand();
}
