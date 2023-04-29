import { errors, messages } from './messenger.js';

const validatePolynomial = (polynomial) => {
  const areCharactersNotAllowed = !(/[0-5]/g).test(polynomial);
  const isRepeated = (/([0-5])(?=\1)/g).test(polynomial);
  const noZero = Boolean(polynomial.indexOf('0') === -1);
  const noFive = Boolean(polynomial.indexOf('5') === -1);
  const noOrderDesc = polynomial.split('').sort((a, b) => b - a).join('') !== polynomial;

  const polynomialErrors = [];

  if (areCharactersNotAllowed) polynomialErrors.push(errors.invalidPolynomialNotAllowedChars);
  if (isRepeated && !areCharactersNotAllowed) polynomialErrors.push(errors.invalidPolynomialDoubles);
  if (noOrderDesc && !areCharactersNotAllowed) polynomialErrors.push(errors.invalidPolynomialNoDecsOrder);
  if (noZero && !areCharactersNotAllowed) polynomialErrors.push(errors.invalidPolynomialNoZero);
  if (noFive && !areCharactersNotAllowed) polynomialErrors.push(errors.invalidPolynomialNoFive);

  return polynomialErrors;
};

const validateStartNumber = (startNumber) => {
  const isValid = startNumber > 0 && startNumber < 32;

  const startNumberErrors = [];

  if (!isValid) startNumberErrors.push(errors.invalidStartNumber);

  return startNumberErrors;
};

const validateFirstNode = (firstNode) => {
  const isValid = firstNode === 'И' || firstNode === 'ИЛИ' || firstNode === 'И-НЕ' || firstNode === 'ИЛИ-НЕ';

  const firstNodeErrors = [];

  if (!isValid) firstNodeErrors.push(errors.invalidFirstNode);

  return firstNodeErrors;
};

const validateSecondNode = (secondNode) => {
  const isValid = secondNode === 'И' || secondNode === 'ИЛИ' || secondNode === 'И-НЕ' || secondNode === 'ИЛИ-НЕ';

  const secondNodeErrors = [];

  if (!isValid) secondNodeErrors.push(errors.invalidSecondNode);

  return secondNodeErrors;
};

const validateThirdNode = (thirdNode) => {
  const isValid = thirdNode === 'УЛ' || thirdNode === 'ДЖ';

  const thirdNodeErrors = [];

  if (!isValid) thirdNodeErrors.push(errors.invalidThirdNode);

  return thirdNodeErrors;
};

const validateData = (data) => {
  const { polynomial, startNumber, nodes } = data;

  const firstNode = nodes[0];
  const secondNode = nodes[1];
  const thirdNode = nodes[2];

  const foundErrors = [];

  foundErrors.push(...validatePolynomial(polynomial));
  foundErrors.push(...validateStartNumber(startNumber))
  foundErrors.push(...validateFirstNode(firstNode));
  foundErrors.push(...validateSecondNode(secondNode));
  foundErrors.push(...validateThirdNode(thirdNode));

  if (foundErrors.length) {
    console.log(messages.emptyLineMsg);
    console.log(errors.invalidData);

    foundErrors.forEach((error) => console.log(error));

    // if (polynomialErrors.length) polynomialErrors.map((error) => console.log(error));
    // if (!startNumberErrors.length) startNumberErrors.map((error) => console.log(error));
    // if (!isFirstNodeValid) console.log(errors.invalidFirstNode);
    // if (!isSecondNodeValid) console.log(errors.invalidSecondNode);
    // if (!isThirdNodeValid) console.log(errors.invalidThirdNode);
    
    console.log(messages.tryAgainMsg);
    console.log(messages.emptyLineMsg);

    return false;
  }

  return true;
};

export { validateData };
