import { getData } from './app/utils/getData.js';
import { dataValidator } from './app/utils/validator.js';

import { getBinaryPolynomial } from './app/registerParams/getBinaryPolynomial.js';
import { getStartState } from './app/registerParams/getStartState.js';
import { getAddictiveBits } from './app/registerParams/getAddictiveBits.js';

import { getPeriod } from './app/algorithm/getPeriod.js';

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

// console.log(getAddictiveBits(binaryPolynomial)); // tech info
// console.log(getSum(startState, addictiveBits));

getPeriod(startState, addictiveBits);
