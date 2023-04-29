const polynomialInput = 530; // Характеристический многочлен для Вашего варианта (см. таблицу в задании к ЛР)
const listNumberInput = 6; // Ваш номер в группе по журналу (в десятичной системе счисления)
const randomNumberInput = 1; // Случайное число, заданное преподавателем (если не задано, то равно 1)

const firstNodeInput = 'И-НЕ'; // Третий нелинейный узел (см. таблицу в задании к ЛР), (возможные варианты: И, ИЛИ, И-НЕ, ИЛИ-НЕ)
const secondNodeInput = 'ИЛИ'; // Второй нелинейный узел (см. таблицу в задании к ЛР), (возможные варианты: И, ИЛИ, И-НЕ, ИЛИ-НЕ)
const thirdNodeInput = 'УЛ'; // Третий нелинейный узел (см. таблицу в задании к ЛР), (возможные варианты: УЛ, ДЖ)

const parseData = (polynomialInput, listNumberInput, randomNumberInput, firstNodeInput, secondNodeInput, thirdNodeInput) => { 
  let polynomial;
  let listNumber;
  let randomNumber;

  let firstNode;
  let secondNode;
  let thirdNode;

  if (typeof polynomialInput === 'number') {
    polynomial = polynomialInput.toString();
  } else {
    polynomial = polynomialInput;
  }

  if (typeof listNumberInput === 'number') {
    listNumber = listNumberInput.toString();
  } else {
    listNumber = listNumberInput;
  }

  if (typeof randomNumberInput === 'number') {
    randomNumber = randomNumberInput.toString();
  } else {
    randomNumber = randomNumberInput;
  }

  firstNode = firstNodeInput.toUpperCase();
  secondNode = secondNodeInput.toUpperCase();
  thirdNode = thirdNodeInput.toUpperCase();

  const nodes = [firstNode, secondNode, thirdNode];

  return { polynomial, listNumber, randomNumber, nodes };
};

const data = parseData(polynomialInput, listNumberInput, randomNumberInput, firstNodeInput, secondNodeInput, thirdNodeInput);

const errors = {
  invalidData: 'Возникли ошибки при вводе данных:',
  invalidPolynomial: 'Ошибка: Неверно введён характеристический многочлен!',
  invalidListNumber: 'Ошибка: Неверно введён номер в списке группы!',
  invalidRandomNumber: 'Ошибка: Неверно введено случайное число!',
  invalidFirstNode: 'Ошибка: Неверно введён первый нелинейный узел!',
  invalidSecondNode: 'Ошибка: Неверно введён второй нелинейный узел!',
  invalidThirdNode: 'Ошибка: Неверно введён третий нелинейный узел!',
  invalidPeriod: 'Длина периода не равна максимальной, дальнейшие вычисления невозможны!'
};

const messages = {
  tryAgainMsg: '!!! Проверьте данные и попробуйте ещё раз !!!',
  inputExitCommand: '!!! Расчёты завершены, нажмите Enter, чтобы завершить выполнение программы. !!!',
  emptyLineMsg: ''
};

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

const getLongestPeriodData = (polynomial) => {
  const maxDegree = Number(polynomial[0]);

  const maxPeriodLength = Math.pow(2, maxDegree) - 1;

  const maxLengthFormula = `2^${maxDegree} - 2 = ${maxPeriodLength}`;

  const notExistingStateMsg = `(все комбинации, кроме ${maxDegree} нулей)`;

  const maxPeriodData = {
    maxPeriodLength,
    maxLengthFormula,
    notExistingStateMsg
  };

  return maxPeriodData;
};

const validatePeriod = (polynomial, periodStates) => {
  const { maxPeriodLength } = getLongestPeriodData(polynomial);

  const currentPeriodLength = periodStates.length;

  if (currentPeriodLength !== maxPeriodLength) {
    console.log(messages.emptyLineMsg);
    console.log(errors.invalidPeriod);

    console.log(messages.tryAgainMsg);
    console.log(messages.emptyLineMsg);

    return false;
  }

  return true;
};

const getBinaryPolynomial = (polynomial) => {
  const polynomialArr = polynomial.split('');

  const reversedBinaryPolynomialArr = [];


  for (let i = 0; i < 6; i++) {
    const currentIndexStr = i.toString();

    if (polynomialArr.includes(currentIndexStr)) {
      reversedBinaryPolynomialArr.push('1');
    } else {
      reversedBinaryPolynomialArr.push('0');
    }
  }

  const binaryPolynomial = reversedBinaryPolynomialArr.reverse().join('');

  return binaryPolynomial;
};

const getStartState = (listNumber, randomNumber) => {
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

  return startState;
};

const getAddictiveBits = (binaryPolynomial) => {
  const valuablePolynomial = binaryPolynomial.slice(1);
  const addictiveBits = [];

  for (let i = 0; i < valuablePolynomial.length; i++) {
    if (valuablePolynomial[i] === '1') {
      addictiveBits.push(i);
    }
  }

  return addictiveBits;
};

const getSum = (state, addictiveBitsIndexes) => {
  let sum = 0;

  for (let i = 0; i < addictiveBitsIndexes.length; i++) {
    sum += Number(state[addictiveBitsIndexes[i]]);
  }

  const resultSum = (sum % 2).toString();

  return resultSum;
};

const getNewState = (prevState, sum) => {
  const prevStateCut = prevState.slice(0, prevState.length - 1);

  const newState = sum + prevStateCut;

  return newState;
};

const getPeriod = (startState, addictiveBits) => {
  const stateArr = [];
  const sumArr = [];
  const period = [];

  let state = startState;
  let sum;

  let isPeriodFinished = false;

  while (!isPeriodFinished) {
    sum = getSum(state, addictiveBits);

    const periodItem = {
      state,
      sum
    };

    stateArr.push(state);
    sumArr.push(sum);
    period.push(periodItem);

    const newState = getNewState(state, sum);

    if (stateArr.includes(newState)) {
      isPeriodFinished = true;
    }
    
    state = newState;
  }

  return period;
};

const getPeriodSums = (period) => {
  const sums = [];

  for (let i = 0; i < period.length; i++) {
    sums.push(period[i].sum);
  }

  return sums;
};

const getRecSeq = (recSeqIterations) => {
  const periodLength = recSeqIterations.length;

  let recSeq = '';

  for (let i = 0; i < periodLength; i++) {
    recSeq = recSeqIterations[i] + recSeq;
  }

  return recSeq;
};

const getPeriodStates = (period) => {
  const states = [];

  for (let i = 0; i < period.length; i++) {
    states.push(period[i].state);
  }

  return states;
};

const andNode = (x1, x2) => {
  if (x1 === '1' && x2 === '1') {
    return '1';
  } else {
    return '0';
  }
};

const andNotNode = (x1, x2) => {
  const andResult = andNode(x1, x2);

  if (andResult === '1') {
    return '0';
  } else {
    return '1';
  }
};

const orNode = (x1, x2) => {
  if (x1 === '1' || x2 === '1') {
    return '1';
  } else {
    return '0';
  }
};

const orNotNode = (x1, x2) => {
  const orResult = orNode(x1, x2);

  if (orResult === '1') {
    return '0';
  } else {
    return '1';
  }
};

const ulNode = (x1, x2, x3) => {
  if (x3 === '1') {
    return andNode(x1, x2);
  } else {
    return orNode(x1, x2);
  }
};

const jeffNode = (x1, x2, x3) => {
  if (x3 === '1') {
    return x1;
  } else {
    return x2;
  }
};

const getNodeFunction = (nodeType) => {
  switch (nodeType) {
  case 'И':
    return andNode;

  case 'И-НЕ':
    return andNotNode;

  case 'ИЛИ':
    return orNode;

  case 'ИЛИ-НЕ':
    return orNotNode;

  case 'УЛ':
    return ulNode;

  case 'ДЖ':
    return jeffNode;
  }
};

const getNodesResults = (period, nodes) => {
  const periodStates = getPeriodStates(period);
  
  const firstNodeFunction = getNodeFunction(nodes[0]);
  const secondNodeFunction = getNodeFunction(nodes[1]);
  const thirdNodeFunction = getNodeFunction(nodes[2]);

  const firstNodeResults = [];
  const secondNodeResults = [];
  const thirdNodeResults = [];

  const periodLength = periodStates.length;
  
  for (let i = 0; i < periodLength; i++) {
    const x1 = periodStates[i][0];
    const x2 = periodStates[i][1];
    const x3 = periodStates[i][2];
    const x4 = periodStates[i][3];
    const x5 = periodStates[i][4];

    const y1 = firstNodeFunction(x1, x2);
    const y2 = secondNodeFunction(x4, x5);
    const y3 = thirdNodeFunction(y1, x3, y2);

    firstNodeResults.push(y1);
    secondNodeResults.push(y2);
    thirdNodeResults.push(y3);
  }

  const results = [firstNodeResults, secondNodeResults, thirdNodeResults];

  return results;
};

const getPolynomialFormula = (polynomial) => {
  const addendums = [];

  for (let i = 0; i < polynomial.length; i++) {
    const currentDegree = polynomial[i];

    currentDegree === '0' ? addendums.push('1') : addendums.push(`x^${currentDegree}`);
  }

  const polynomialFormula = addendums.join(' + ');

  return polynomialFormula;
};

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

const nodeNames = {
  'И': 'И',
  'ИЛИ': 'ИЛИ',
  'И-НЕ': 'И-НЕ',
  'ИЛИ-НЕ': 'ИЛИ-НЕ',
  'УЛ': 'элемент управляемая логика',
  'ДЖ': 'элемент Джеффа'
};

const getNodeList = (nodes) => {
  let nodeListArr = [];

  for (let i = 0; i < nodes.length; i++) {
    const currentNode = nodes[i];
    const currentNodeName = nodeNames[currentNode];

    nodeListArr.push(currentNodeName);
  }

  const nodeList = nodeListArr.join(', ');

  return nodeList;
};

const printVariantData = (polynomial, listNumber, randomNumber, nodes) => {
  const polynomialFormula = getPolynomialFormula(polynomial);
  const startStateFormula = getStartStateFormula(listNumber, randomNumber);
  const nodeList = getNodeList(nodes);

  const variantMsg = 'Вариант:';
  const polynomialFormulaMsg = `№${listNumber}: h(x) = ${polynomialFormula}`;
  const startStateMsg = `Начальное заполнение регистра: S = ${startStateFormula}`;
  const nodeListMsg = `Нелинейные узлы 1, 2, 3: ${nodeList}`;

  const messagesArr = [variantMsg, polynomialFormulaMsg, startStateMsg, nodeListMsg];

  console.log(messages.emptyLineMsg);
  for (let i = 0; i < messagesArr.length; i++) {
    console.log(messagesArr[i]);
  }
};

const printStartData = (polynomial) => {
  const startDataMsg = 'Выполнение работы:';

  const { maxLengthFormula, notExistingStateMsg } = getLongestPeriodData(polynomial);

  const maxPeriodMsg = `Максимальный период рекуррентной последовательности для регистра заданным примитивным многочленом: ${maxLengthFormula}, ${notExistingStateMsg}`;

  const messagesArr = [startDataMsg, maxPeriodMsg];

  console.log(messages.emptyLineMsg);
  for (let i = 0; i < messagesArr.length; i++) {
    console.log(messagesArr[i]);
  }
};

const getRawPeriodColumns = (period) => {
  const periodLength = period.length;

  const rawPeriodColumns = [];

  // № column
  const numberOfRoundColumn = ['№'];

  for (let i = 0; i < periodLength; i++) {
    const currentNumber = (i + 1).toString();

    numberOfRoundColumn.push(currentNumber);
  }
  rawPeriodColumns.push(numberOfRoundColumn);

  // state column
  const stateColumn = ['Состояние'];

  for (let i = 0; i < periodLength; i++) {
    const currentPeriod = period[i].state;

    stateColumn.push(currentPeriod);
  }
  rawPeriodColumns.push(stateColumn);

  // sum column
  const sumColumn = ['Результат суммы'];

  for (let i = 0; i < periodLength; i++) {
    const currentSum = period[i].sum;

    sumColumn.push(currentSum);
  }
  rawPeriodColumns.push(sumColumn);

  return rawPeriodColumns;
};

const getPeriodTable = (period) => {
  const rawColumns = getRawPeriodColumns(period);
  const periodLength = period.length;

  const maxStrLengthArr = [0, 0, 0];

  for (let i = 0; i < rawColumns.length; i++) {
    for (let j = 0; j <= periodLength; j++) {
      const currentStrLength = rawColumns[i][j].length;

      if (currentStrLength > maxStrLengthArr[i]) {
        maxStrLengthArr[i] = currentStrLength;
      }
    }
  }

  const columns = [[], [], []];

  for(let i = 0; i < rawColumns.length; i++) {
    const currentMaxLength = maxStrLengthArr[i];

    for(let j = 0; j <= periodLength; j++) {
      let currentStr = rawColumns[i][j];
      const offset = currentMaxLength - currentStr.length;

      let startOffset = 0;
      let endOffset = 0;

      if (offset > 0) {
        startOffset = Math.floor(offset / 2);
        endOffset = offset - startOffset;
      }

      while (startOffset > 0) {
        currentStr = ' ' + currentStr;
        startOffset--;
      }

      while (endOffset > 0) {
        currentStr = currentStr + ' ';
        endOffset--;
      }

      columns[i].push(currentStr);
    }
  }

  const lines = [];

  for (let i = 0; i <= periodLength; i++) {
    const line = `| ${columns[0][i]} | ${columns[1][i]} | ${columns[2][i]} |`;

    lines.push(line);
  }

  let divider = '';
  let dividerLength = lines[0].length;

  for (let j = 0; j < dividerLength; j++) {
    divider += '-';
  }

  const table = [];

  for (let i = 0; i <= periodLength; i++) {
    const line = lines[i];

    table.push(divider);
    table.push(line);
  }
  table.push(divider);

  return table;
};

const printPeriodTable = (period) => {
  const periodTable = getPeriodTable(period);

  console.log(messages.emptyLineMsg);
  console.log('Проведем моделирование работы ЛРР, представив таблицу смены его состояний:');

  for (let j = 0; j < periodTable.length; j++) {
    const row = periodTable[j];

    console.log(row);
  }
};

const getRawNodesColumns = (period, nodesResults) => {
  const periodLength = period.length;

  const rawNodesColumns = [];

  // № column
  const numberOfRoundColumn = ['№'];

  for (let i = 0; i < periodLength; i++) {
    const currentNumber = (i + 1).toString();

    numberOfRoundColumn.push(currentNumber);
  }
  rawNodesColumns.push(numberOfRoundColumn);

  // state column
  const stateColumn = ['Состояние ЛРР'];

  for (let i = 0; i < periodLength; i++) {
    const currentPeriod = period[i].state;

    stateColumn.push(currentPeriod);
  }
  rawNodesColumns.push(stateColumn);

  // sum column
  const sumColumn = ['Результат суммы'];

  for (let i = 0; i < periodLength; i++) {
    const currentSum = period[i].sum;

    sumColumn.push(currentSum);
  }
  rawNodesColumns.push(sumColumn);

  // first node column
  const firstNodeColumn = ['Результат узла 1'];

  for (let i = 0; i < periodLength; i++) {
    const currentNodeResult = nodesResults[0][i];

    firstNodeColumn.push(currentNodeResult);
  }
  rawNodesColumns.push(firstNodeColumn);

  // second node column
  const secondNodeColumn = ['Результат узла 2'];

  for (let i = 0; i < periodLength; i++) {
    const currentNodeResult = nodesResults[1][i];

    secondNodeColumn.push(currentNodeResult);
  }
  rawNodesColumns.push(secondNodeColumn);

  // third node column
  const thirdNodeColumn = ['Результат узла 3'];

  for (let i = 0; i < periodLength; i++) {
    const currentNodeResult = nodesResults[2][i];

    thirdNodeColumn.push(currentNodeResult);
  }
  rawNodesColumns.push(thirdNodeColumn);

  return rawNodesColumns;
};

const getNodesTable = (period, nodesResults) => {
  const rawColumns = getRawNodesColumns(period, nodesResults);
  const periodLength = period.length;

  const maxStrLengthArr = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < rawColumns.length; i++) {
    for (let j = 0; j <= periodLength; j++) {
      const currentStrLength = rawColumns[i][j].length;

      if (currentStrLength > maxStrLengthArr[i]) {
        maxStrLengthArr[i] = currentStrLength;
      }
    }
  }

  const columns = [[], [], [], [], [], []];

  for(let i = 0; i < rawColumns.length; i++) {
    const currentMaxLength = maxStrLengthArr[i];

    for(let j = 0; j <= periodLength; j++) {
      let currentStr = rawColumns[i][j];
      const offset = currentMaxLength - currentStr.length;

      let startOffset = 0;
      let endOffset = 0;

      if (offset > 0) {
        startOffset = Math.floor(offset / 2);
        endOffset = offset - startOffset;
      }

      while (startOffset > 0) {
        currentStr = ' ' + currentStr;
        startOffset--;
      }

      while (endOffset > 0) {
        currentStr = currentStr + ' ';
        endOffset--;
      }

      columns[i].push(currentStr);
    }
  }

  const lines = [];

  for (let i = 0; i <= periodLength; i++) {
    const line = `| ${columns[0][i]} | ${columns[1][i]} | ${columns[2][i]} | ${columns[3][i]} | ${columns[4][i]} | ${columns[5][i]} |`;

    lines.push(line);
  }

  let divider = '';
  let dividerLength = lines[0].length;

  for (let j = 0; j < dividerLength; j++) {
    divider += '-';
  }

  const table = [];

  for (let i = 0; i <= periodLength; i++) {
    const line = lines[i];

    table.push(divider);
    table.push(line);
  }
  table.push(divider);

  return table;
};

const printNodesTable = (period, nodesResults) => {
  const nodesTable = getNodesTable(period, nodesResults);

  console.log(messages.emptyLineMsg);
  console.log('Проведем моделирование работы формирователя случайной гаммы, представив таблицу смены его состояний:');

  for (let j = 0; j < nodesTable.length; j++) {
    const row = nodesTable[j];

    console.log(row);
  }
};

const printSequences = (recSeqRegister, firstNodeSequence, secondNodeSequence, thirdNodeSequence) => {
  const sequencesMsg = 'Получили следующие последовательности:';

  const recSeqRegisterMsg = `ЛРП:         ${recSeqRegister}`;
  const firstNodeSequenceMsg = `Узел 1:      ${firstNodeSequence}`;
  const secondNodeSequenceMsg = `Узел 2:      ${secondNodeSequence}`;
  const thirdNodeSequenceMsg = `Узел 3 (ШГ): ${thirdNodeSequence}`;

  const messagesArr = [sequencesMsg, recSeqRegisterMsg, firstNodeSequenceMsg, secondNodeSequenceMsg, thirdNodeSequenceMsg];

  console.log(messages.emptyLineMsg);
  for (let i = 0; i < messagesArr.length; i++) {
    console.log(messagesArr[i]);
  }
};

const getRecSeqStates = (recSeq) => {
  const recSeqExtended = recSeq + recSeq.substring(0, 5);
  const numberOfStates = recSeq.length;

  const recSeqStates = [];

  for (let i = 0; i < numberOfStates; i++) {
    const currentState = recSeqExtended.substring(i, i + 5);

    recSeqStates.push(currentState);
  }

  return recSeqStates;
};

const getRecSeqAnalysis = (recSeq) => {
  const recSeqStates = getRecSeqStates(recSeq);

  // get period of recurrent sequence
  const recSeqPeriod = recSeq.length;

  // get recurrent sequence balance
  const recSeqBalance = {
    zeroes: 0,
    ones: 0
  };

  for (let i = 0; i < recSeq.length; i++) {
    if (recSeq[i] === '0') recSeqBalance.zeroes++;

    if (recSeq[i] === '1') recSeqBalance.ones++;
  }

  // get recurrent sequence series lengths
  const recSeqSeriesLength = [];

  let currentSeriesLength = 1;

  for (let i = 0; i < recSeq.length; i++) {
    if (recSeq[i] === recSeq[i + 1]) {
      currentSeriesLength++;
    } else {
      recSeqSeriesLength.push(currentSeriesLength);
      currentSeriesLength = 1;
    }
  }

  // get number of recurrent sequence series lengths in format: { 'length of series': 'number od series that length' }
  const recSeqSeries = {};

  for (let i = 0; i < recSeqSeriesLength.length; i++) {
    const currentLengthKey = recSeqSeriesLength[i].toString();

    if (currentLengthKey in recSeqSeries) {
      recSeqSeries[currentLengthKey]++;
    } else {
      recSeqSeries[currentLengthKey] = 1;
    }
  }

  // check if "window" property is fulfilled
  const uniqueStates = new Set(recSeqStates);

  const numberOfUniqueStates = uniqueStates.size;
  const numberOfStates = recSeqStates.length;

  const windowProperty = {
    recSeqStates,
    numberOfStates,
    numberOfUniqueStates,
    isFulfilled: true
  };

  if (numberOfUniqueStates !== recSeqPeriod) {
    windowProperty.isFulfilled = false;
  }

  // create object with analysis results
  const recSeqAnalysisResults = {
    recSeqPeriod,
    recSeqBalance,
    recSeqSeries,
    windowProperty
  };

  return recSeqAnalysisResults;
};

const printRecSeqAnalysisResults = (recSeq, sequenceType) => {
  const { 
    recSeqPeriod,
    recSeqBalance,
    recSeqSeries,
    windowProperty
  } = getRecSeqAnalysis(recSeq);

  let sequenceName;
  let sequenceNameDeclinated;

  if (sequenceType === 'register') {
    sequenceName = 'Линейно рекуррентная последовательность';
    sequenceNameDeclinated = 'линейно рекуррентную последовательность';
  } else if (sequenceType === 'nodes') {
    sequenceName = 'Последовательность на выходе формирователя случайной гаммы';
    sequenceNameDeclinated = 'последовательность на выходе формирователя случайной гаммы';
  } else {
    sequenceName = 'Последовательность';
    sequenceNameDeclinated = 'последовательность';
  }

  const analysisMsg = `Исследуем полученную ${sequenceNameDeclinated}:`;
  const recSeqMsg = `${sequenceName}: ${recSeq}.`;
  const recSeqPeriodMsg = `Период последовательности: ${recSeqPeriod}.`;
  const recSeqBalanceMsg = `Баланс единиц и нулей: ${recSeqBalance.ones} единиц, ${recSeqBalance.zeroes} нулей.`;

  // recurrent sequence series
  const lengthOfSeries = Object.keys(recSeqSeries);
  const quantityOfSeries = Object.values(recSeqSeries);

  let seriesArr = [];

  for (let i = 0; i < quantityOfSeries.length; i++ ) {
    const currentSeries = `${quantityOfSeries[i]} серий длины ${lengthOfSeries[i]}`;

    seriesArr.push(currentSeries);
  }

  const seriesStr = seriesArr.join(', ');

  const recSeqSeriesMsg = `Серии: ${seriesStr}.`;

  // recurrent sequence "window" property
  const { recSeqStates, numberOfStates, numberOfUniqueStates, isFulfilled } = windowProperty;

  const windowPropertyStates = [];

  for (let i = 0; i < recSeqStates.length; i++ ) {
    const currentState = `${recSeqStates[i]}`;

    windowPropertyStates.push(currentState);
  }

  const windowPropertyStatesStr = windowPropertyStates.join(', ');
  const windowPropertyNumberStr = `Число полученных комбинаций: ${numberOfStates}.`;
  const windowPropertyRepeatingStr = isFulfilled
    ? 'Среди комбинаций нет повторяющихся, следовательно, свойство "окна" выполняется.'
    : `Число не повторяющихся комбинаций: ${numberOfUniqueStates}, следовательно, свойство "окна" не выполняется.`;


  const windowPropertyMsg = `Свойство "окна":\n${windowPropertyStatesStr} \n${windowPropertyNumberStr} ${windowPropertyRepeatingStr}`;

  // printing of results
  const analysisMessages = [recSeqMsg, recSeqPeriodMsg, recSeqBalanceMsg, recSeqSeriesMsg, windowPropertyMsg];

  console.log(messages.emptyLineMsg);
  console.log(analysisMsg);

  for (let i = 0; i < analysisMessages.length; i++) {
    console.log(`${i + 1}) ${analysisMessages[i]}`);
  }
};

const isDataValid = validateData(data);

if (isDataValid) {
  const { polynomial, listNumber, randomNumber, nodes } = data;

  const binaryPolynomial = getBinaryPolynomial(polynomial);
  const startState = getStartState(listNumber, randomNumber);
  const addictiveBits = getAddictiveBits(binaryPolynomial);

  const period = getPeriod(startState, addictiveBits);
  const periodStates = getPeriodStates(period);
  const periodSums = getPeriodSums(period);
  const recSeqRegister = getRecSeq(periodSums);

  const isPeriodValid = validatePeriod(polynomial, periodStates);

  const nodesResults = getNodesResults(period, nodes);

  const firstNodeSequence = getRecSeq(nodesResults[0]);
  const secondNodeSequence = getRecSeq(nodesResults[1]);
  const thirdNodeSequence = getRecSeq(nodesResults[2]);

  if (isPeriodValid) {
    printVariantData(polynomial, listNumber, randomNumber, nodes);
    printStartData(polynomial, listNumber);
    printPeriodTable(period);
    printRecSeqAnalysisResults(recSeqRegister, 'register');
    printNodesTable(period, nodesResults);
    printSequences(recSeqRegister, firstNodeSequence, secondNodeSequence, thirdNodeSequence);
    printRecSeqAnalysisResults(thirdNodeSequence, 'nodes');
  }
}
