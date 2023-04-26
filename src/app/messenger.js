import { getPolynomialFormula } from './utils/getPolynomialFormula.js';
import { getStartStateFormula } from './utils/getStartStateFormula.js';
import { getLongestPeriodData } from './registerParamsCalc/getLongestPeriodData.js';
import { getPeriodTable } from './utils/getPeriodTable.js';
import { getRecSeqAnalysis } from './recSeqCalc/getRecSeqAnalysis.js';

const errors = {
  invalidData: 'Возникли ошибки при вводе данных:',
  invalidPolynomial: 'Ошибка: Неверно введён характеристический многочлен!',
  invalidListNumber: 'Ошибка: Неверно введён номер в списке группы!',
  invalidRandomNumber: 'Ошибка: Неверно введено случайное число!',
  invalidPeriod: 'Длина периода не равна максимальной, дальнейшие вычисления невозможны!'
};

const messages = {
  inputPolynomialMsg: 'Введите характеристический многочлен согласно варианту: ',
  inputListNumberMsg: 'Введите ваш номер в списке группы: ',
  inputRandomNumberMsg: 'Введите случайное число, заданное преподавателем(или нажмите Enter для ввода значения по умолчанию): ',
  tryAgainMsg: '!!! Проверьте данные и попробуйте ещё раз !!!',
  inputExitCommand: '!!! Расчёты завершены, нажмите Enter, чтобы завершить выполнение программы. !!!',
  emptyLineMsg: ''
};

const printVariantData = (polynomial, listNumber, randomNumber) => {
  const polynomialFormula = getPolynomialFormula(polynomial);
  const startStateFormula = getStartStateFormula(listNumber, randomNumber);

  const variantMsg = 'Вариант:';
  const polynomialFormulaMsg = `№${listNumber}: h(x) = ${polynomialFormula}`;
  const startStateMsg = `Начальное заполнение регистра: S = ${startStateFormula}`;

  const messagesArr = [variantMsg, polynomialFormulaMsg, startStateMsg];

  console.log(messages.emptyLineMsg);
  for (let i = 0; i < messagesArr.length; i++) {
    console.log(messagesArr[i]);
  }
};

const printStartData = (polynomial) => {
  const startDataMsg = 'Выполнение работы:';
  // const startStateMsg = `Начальное заполнение – номер по списку в двоичном виде, младший разряд справа: ${listNumber} = ${startState}`;

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

const printRecSeqAnalysisResults = (period) => {
  const { 
    recSeq,
    recSeqPeriod,
    recSeqBalance,
    recSeqSeries,
    windowProperty
  } = getRecSeqAnalysis(period);

  const analysisMsg = 'Исследуем полученную ЛРП:';
  const recSeqMsg = `Линейно рекуррентная последовательность: ${recSeq}.`;
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
  const { states, numberOfUniqueStates, isFulfilled } = windowProperty;

  const windowPropertyStates = [];

  for (let i = 0; i < states.length; i++ ) {
    const currentState = `${states[i]}`;

    windowPropertyStates.push(currentState);
  }

  const windowPropertyStatesStr = windowPropertyStates.join(', ');
  const windowPropertyNumberStr = `Число полученных комбинаций: ${numberOfUniqueStates}.`;
  const windowPropertyRepeatingStr = isFulfilled
    ? 'Среди комбинаций нет повторяющихся, следовательно, свойство "окна" выполняется.'
    : 'Среди комбинаций есть повторяющиеся, следовательно, свойство "окна" не выполняется.';


  const windowPropertyMsg = `Свойство "окна":\n${windowPropertyStatesStr} \n${windowPropertyNumberStr} ${windowPropertyRepeatingStr}`;

  // printing of results
  const analysisMessages = [recSeqMsg, recSeqPeriodMsg, recSeqBalanceMsg, recSeqSeriesMsg, windowPropertyMsg];

  console.log(messages.emptyLineMsg);
  console.log(analysisMsg);

  for (let i = 0; i < analysisMessages.length; i++) {
    console.log(`${i + 1}) ${analysisMessages[i]}`);
  }
};

const printResults = (polynomial, listNumber, randomNumber, period) => {
  printVariantData(polynomial, listNumber, randomNumber);
  printStartData(polynomial, listNumber);
  printPeriodTable(period);
  printRecSeqAnalysisResults(period);
};

export { errors, messages, printResults };
