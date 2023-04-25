import { getData, getExitCommand } from './app/utils/getUserInput.js';
import { validateData } from './app/utils/validator.js';

import { getBinaryPolynomial } from './app/registerParamsCalc/getBinaryPolynomial.js';
import { getStartState } from './app/registerParamsCalc/getStartState.js';
import { getAddictiveBits } from './app/registerParamsCalc/getAddictiveBits.js';

import { findAllPeriods } from './app/periodsCalc/findAllPeriods.js';

import { printResults } from './app/utils/messenger.js';

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

printResults(polynomial, listNumber, startState, allPeriods);

await getExitCommand();
