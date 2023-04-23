import { getTable } from './getTable.js';
import { getPolynomialFormula } from './getPolynomialFormula.js';

const errors = {
  invalidData: 'Возникли ошибки при вводе данных:',
  invalidPolynomial: 'Ошибка: Неверно введён характеристический многочлен!',
  invalidListNumber: 'Ошибка: Неверно введён номер в списке группы!'
};

const messages = {
  inputPolynomialMsg: 'Введите характеристический многочлен согласно варианту: ',
  inputListNumberMsg: 'Введите ваш номер в списке группы: ',
  tryAgainMsg: '!!! Проверьте данные и попробуйте ещё раз !!!',
  inputExitCommand: '!!! Расчёты завершены, нажмите Enter, чтобы завершить выполнение программы. !!!',
  emptyLineMsg: ''
};

const printVariantData = (polynomial, listNumber, binaryPolynomial, startState) => {
  const polynomialFormula = getPolynomialFormula(polynomial);

  const variantMsg = 'Вариант:';
  const polynomialFormulaMsg = `№${listNumber}: h(x) = ${polynomialFormula}`;
  const binaryPolynomialMsg = `Коэффициенты полинома: ${binaryPolynomial}`;
  const startStateMsg = `Начальное заполнение регистра: ${startState}`;

  const messagesArr = [variantMsg, polynomialFormulaMsg, binaryPolynomialMsg, startStateMsg];

  console.log(messages.emptyLineMsg);
  for (let i = 0; i < messagesArr.length; i++) {
    console.log(messagesArr[i]);
  }
};

const printAllPeriods = (allPeriods) => {
  const allRounds = allPeriods.flat();
  const numberOfPeriods = allRounds.length;

  const table = getTable(allRounds, numberOfPeriods);
  const tableMsg = 'Таблица смены состояний регистра:';

  console.log(messages.emptyLineMsg);
  console.log(tableMsg);
  for (let i = 0; i < table.length; i++) {
    const row = table[i];

    console.log(row);
  }
};

const printRecSeqAnalysisResults = (recSeqAnalysisResults) => {
  const { 
    recSeq,
    recSeqPeriod,
    recSeqBalance,
    recSeqSeries,
    windowProperty
  } = recSeqAnalysisResults;

  const recSeqMsg = `Линейно рекуррентная последовательность: ${recSeq}.`;

  const analysisMsg = 'Результаты анализа линейно рекуррентной последовательности (для периода максимальной длины):';
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
  const analysisMessages = [recSeqPeriodMsg, recSeqBalanceMsg, recSeqSeriesMsg, windowPropertyMsg];

  console.log(messages.emptyLineMsg);
  console.log(recSeqMsg);
  console.log(messages.emptyLineMsg);
  console.log(analysisMsg);

  for (let i = 0; i < analysisMessages.length; i++) {
    console.log(`${i + 1}) ${analysisMessages[i]}`);
  }
};

export { errors, messages, printVariantData, printAllPeriods, printRecSeqAnalysisResults };
