import { errors, messages } from './messages.js';

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

  if (!isPolynomialValid || !isListNumberValid) {
    console.log(messages.emptyLineMsg);
    console.log(errors.invalidData);

    if (!isPolynomialValid) console.log(errors.invalidPolynomial);
    if (!isListNumberValid) console.log(errors.invalidListNumber);
    
    console.log(messages.tryAgainMsg);
    console.log(messages.emptyLineMsg);

    return false;
  }

  return true;
};

export { dataValidator };
