import { getData } from './app/utils/getData.js';
import { dataValidator } from './app/utils/validator.js';

import { getBinaryPolynomial } from './app/registerParams/getBinaryPolynomial.js';
import { getStartState } from './app/registerParams/getStartState.js';
import { getAddictiveBits } from './app/registerParams/getAddictiveBits.js';

import { getSumFromState } from './app/algorithm/getSumFromState.js';
import { getNewState } from './app/algorithm/getNewState.js';

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

console.log(getBinaryPolynomial(polynomial)); // print to user
console.log(getStartState(listNumber)); // print to user

console.log(getAddictiveBits(binaryPolynomial)); // tech info
console.log(getSumFromState(startState, addictiveBits));

const sum = getSumFromState(startState, addictiveBits);
console.log(getNewState(startState, sum));
