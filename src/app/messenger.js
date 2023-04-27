import { getPolynomialFormula } from './utils/getMessageInfo/getPolynomialFormula.js';
import { getNodeList } from './utils/getMessageInfo/getNodeList.js';
import { getLongestPeriodData } from './utils/getMessageInfo/getLongestPeriodData.js';
import { getPeriodTable } from './utils/getMessageInfo/getPeriodTable.js';
import { getNodesTable } from './utils/getMessageInfo/getNodesTable.js';
import { getRecSeqAnalysis } from './recSeqCalc/getRecSeqAnalysis.js';

const errors = {
  invalidData: 'Возникли ошибки при вводе данных:',
  invalidPolynomialNotAllowedChars: 'Ошибка: Использованы недопустимые символы при вводе степеней характеристического многочлена h(x)!',
  invalidPolynomialDoubles: 'Ошибка: В степенях коэффициентов многочлена h(x) не может быть повторений!',
  invalidPolynomialNoDecsOrder: 'Ошибка: Степени коэффициентов многочлена h(x) должны быть указаны по убыванию!',
  invalidPolynomialNoZero: 'Ошибка: В степенях коэффициентов многочлена h(x) обязательно должен присутствовать символ "0"',
  invalidPolynomialNoFive: 'Ошибка: В степенях коэффициентов многочлена h(x) обязательно должен присутствовать символ "5"',
  invalidStartNumber: 'Ошибка: Начальное положение регистра должно быть числом от 1 до 31!',
  invalidFirstNode: 'Ошибка: Указано недопустимое значение в качестве первого нелинейного узла!',
  invalidSecondNode: 'Ошибка: Указано недопустимое значение в качестве второго нелинейного узла!',
  invalidThirdNode: 'Ошибка: Указано недопустимое значение в качестве третьего нелинейного узла!',
  invalidPeriod: 'Длина периода не равна максимальной, дальнейшие вычисления невозможны!'
};

const messages = {
  inputPolynomialMsg: 'Введите степени коэффициентов характеристического многочлена h(x) по убыванию (степени "5" и "0" являются обязательными): ',
  inputStartNumberMsg: 'Введите начальное положение регистра в десятичной системе счисления (число от 1 до 31): ',
  inputFirstNode: 'Введите первый нелинейный узел генератора случайной гаммы (возможные варианты: И, ИЛИ, И-НЕ, ИЛИ-НЕ): ',
  inputSecondNode: 'Введите второй нелинейный узел генератора случайной гаммы (возможные варианты: И, ИЛИ, И-НЕ, ИЛИ-НЕ): ',
  inputThirdNode: 'Введите третий нелинейный узел генератора случайной гаммы (возможные варианты: УЛ, ДЖ): ',
  tryAgainMsg: '!!! Проверьте данные и попробуйте ещё раз !!!',
  inputExitCommand: '!!! Расчёты завершены, нажмите Enter, чтобы завершить выполнение программы. !!!',
  emptyLineMsg: ''
};

const printVariantData = (polynomial, startNumber, startState, nodes) => {
  const polynomialFormula = getPolynomialFormula(polynomial);
  const nodeList = getNodeList(nodes);

  const variantMsg = 'Параметры регистра:';
  const polynomialFormulaMsg = `Характеристический многочлен: h(x) = ${polynomialFormula}`;
  const startStateMsg = `Начальное заполнение регистра: S = ${startNumber} = ${startState}`;
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

const printPeriodTable = (period) => {
  const periodTable = getPeriodTable(period);

  console.log(messages.emptyLineMsg);
  console.log('Проведем моделирование работы ЛРР, представив таблицу смены его состояний:');

  for (let j = 0; j < periodTable.length; j++) {
    const row = periodTable[j];

    console.log(row);
  }
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

export {
  errors,
  messages,
  printVariantData,
  printStartData,
  printPeriodTable,
  printRecSeqAnalysisResults,
  printNodesTable,
  printSequences
};
