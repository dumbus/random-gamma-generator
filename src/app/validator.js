import { errors, messages } from './messenger.js';
import { getLongestPeriodData } from './utils/getMessageInfo/getLongestPeriodData.js';

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

const validateFirstNode = (firstNode) => {
  const isValid = firstNode === 'И' || firstNode === 'ИЛИ' || firstNode === 'И-НЕ' || firstNode === 'ИЛИ-НЕ';

  return isValid;
};

const validateSecondNode = (secondNode) => {
  const isValid = secondNode === 'И' || secondNode === 'ИЛИ' || secondNode === 'И-НЕ' || secondNode === 'ИЛИ-НЕ';

  return isValid;
};

const validateThirdNode = (thirdNode) => {
  const isValid = thirdNode === 'УЛ' || thirdNode === 'ДЖ';

  return isValid;
};

const validateData = (data) => {
  const { polynomial, listNumber, randomNumber, nodes } = data;

  const firstNode = nodes[0];
  const secondNode = nodes[1];
  const thirdNode = nodes[2];

  const isPolynomialValid = validatePolynomial(polynomial);
  const isListNumberValid = validateListNumber(listNumber);
  const isRandomNumberValid = validateRandomNumber(randomNumber);
  const isFirstNodeValid = validateFirstNode(firstNode);
  const isSecondNodeValid = validateSecondNode(secondNode);
  const isThirdNodeValid = validateThirdNode(thirdNode);

  if (!isPolynomialValid || !isListNumberValid || !isRandomNumberValid || !isFirstNodeValid || !isSecondNodeValid || !isThirdNodeValid) {
    console.log(messages.emptyLineMsg);
    console.log(errors.invalidData);

    if (!isPolynomialValid) console.log(errors.invalidPolynomial);
    if (!isListNumberValid) console.log(errors.invalidListNumber);
    if (!isRandomNumberValid) console.log(errors.invalidRandomNumber);
    if (!isFirstNodeValid) console.log(errors.invalidFirstNode);
    if (!isSecondNodeValid) console.log(errors.invalidSecondNode);
    if (!isThirdNodeValid) console.log(errors.invalidThirdNode);
    
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
