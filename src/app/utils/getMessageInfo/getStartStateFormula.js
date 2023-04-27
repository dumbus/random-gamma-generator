const getStartStateFormula = (listNumber, randomNumber) => {
  const binListNumber = Number(listNumber).toString(2);
  const binRandomNumber = Number(randomNumber).toString(2);

  let fullBinListNumber = binListNumber;

  while (fullBinListNumber.length !== 5) {
    fullBinListNumber = '0' + fullBinListNumber;
  }

  let fullBinRandomNumber = binRandomNumber;

  while (fullBinRandomNumber.length !== 5) {
    fullBinRandomNumber = '0' + fullBinRandomNumber;
  }

  let startState = '';

  for (let i = 0; i < fullBinListNumber.length; i++) {
    if (fullBinListNumber[i] === fullBinRandomNumber[i]) {
      startState += '0';
    } else {
      startState += '1';
    }
  }

  const startStateFormula = `${fullBinListNumber} ⊕  ${fullBinRandomNumber} = ${startState}`;

  return startStateFormula;
};

export { getStartStateFormula };
