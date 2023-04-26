import { errors, messages } from './messenger.js';
import { getLongestPeriodData } from './registerParamsCalc/getLongestPeriodData.js';

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

const validateRandomNumber = (randomNumber) => {
  const isValid = randomNumber > -1 && randomNumber < 32;

  return isValid;
};

const validateData = (data) => {
  const { polynomial, listNumber, randomNumber } = data;

  const isPolynomialValid = validatePolynomial(polynomial);
  const isListNumberValid = validateListNumber(listNumber);
  const isRandomNumberValid = validateRandomNumber(randomNumber);

  if (!isPolynomialValid || !isListNumberValid || !isRandomNumberValid) {
    console.log(messages.emptyLineMsg);
    console.log(errors.invalidData);

    if (!isPolynomialValid) console.log(errors.invalidPolynomial);
    if (!isListNumberValid) console.log(errors.invalidListNumber);
    if (!isRandomNumberValid) console.log(errors.invalidRandomNumber);
    
    console.log(messages.tryAgainMsg);
    console.log(messages.emptyLineMsg);

    return false;
  }

  return true;
};

const validatePeriod = (period, polynomial) => {
  const { maxPeriodLength } = getLongestPeriodData(polynomial);

  const currentPeriodLength = period.length;

  if (currentPeriodLength !== maxPeriodLength) {
    console.log(messages.emptyLineMsg);
    console.log(errors.invalidPeriod);

    console.log(messages.tryAgainMsg);
    console.log(messages.emptyLineMsg);

    return false;
  }

  return true;
};

export { validateData, validatePeriod };
