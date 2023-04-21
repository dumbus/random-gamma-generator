import { printError } from './messenger.js';

const validatePolynomial = (polynomial) => {
  const regex = /[0-5]/g;

  const isRepeated = /([0-5])(?=\1)/g;

  const isValid = regex.test(polynomial) && !isRepeated.test(polynomial);

  return isValid;
};

const validateListNumber = (listNumber) => {
  const isValid = listNumber > 0 && listNumber < 32;

  return isValid;
};

const dataValidator = (data) => {
  const { polynomial, listNumber } = data;

  const isPolynomialValid = validatePolynomial(polynomial);
  const isListNumberValid = validateListNumber(listNumber);

  if (!isPolynomialValid) printError('invalidPolynomial');
  if (!isListNumberValid) printError('invalidListNumber');

  return !isPolynomialValid || !isListNumberValid ? false : true;
};

export { dataValidator };
