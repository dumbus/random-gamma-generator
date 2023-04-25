import { getPolynomialFormula } from './getPolynomialFormula.js';
import { getLongestPeriodData } from '../registerParamsCalc/getLongestPeriodData.js';
import { getPeriodData } from './getPeriodData.js';
import { getRecSeqAnalysis } from '../recSeqCalc/getRecSeqAnalysis.js';

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

const printVariantData = (polynomial, listNumber) => {
  const polynomialFormula = getPolynomialFormula(polynomial);

  const variantMsg = 'Вариант:';
  const polynomialFormulaMsg = `№${listNumber}: h(x) = ${polynomialFormula}`;

  const messagesArr = [variantMsg, polynomialFormulaMsg];

  console.log(messages.emptyLineMsg);
  for (let i = 0; i < messagesArr.length; i++) {
    console.log(messagesArr[i]);
  }
};

const printStartData = (polynomial, listNumber, startState) => {
  const startDataMsg = 'Выполнение работы:';
  const startStateMsg = `Начальное заполнение – номер по списку в двоичном виде, младший разряд справа: ${listNumber} = ${startState}`;

  const { maxLengthFormula, notExistingStateMsg } = getLongestPeriodData(polynomial);

  const maxPeriodMsg = `Максимальный период рекуррентной последовательности для регистра заданным примитивным многочленом: ${maxLengthFormula}, ${notExistingStateMsg}`;

  const messagesArr = [startDataMsg, startStateMsg, maxPeriodMsg];

  console.log(messages.emptyLineMsg);
  for (let i = 0; i < messagesArr.length; i++) {
    console.log(messagesArr[i]);
  }
};

const printAllPeriodsData = (allPeriods) => {
  const numberOfPeriods = allPeriods.length;

  for (let i = 0; i < numberOfPeriods; i++) {
    const { periodTable, periodRecSeq, periodLength } = getPeriodData(allPeriods[i]);

    const recSeqMsg = `ЛРП: ${periodRecSeq}`;
    const periodLengthMsg = `Период равен ${periodLength}`;

    console.log(messages.emptyLineMsg);
    if (i === 0) {
      console.log('Проведем моделирование работы ЛРР, представив таблицу смены его состояний:');
    } else {
      console.log('Выберем другое начальное заполнение, выбирая среди отсутствующих состояний, проведем моделирование:');
    }

    for (let j = 0; j < periodTable.length; j++) {
      const row = periodTable[j];
  
      console.log(row);
    }
    console.log(recSeqMsg);
    console.log(periodLengthMsg);
  }
};

const printRecSeqAnalysisResults = (allPeriods) => {
  const { 
    recSeq,
    recSeqPeriod,
    recSeqBalance,
    recSeqSeries,
    windowProperty
  } = getRecSeqAnalysis(allPeriods);

  const analysisMsg = 'Исследуем ЛРП с наибольшим периодом:';
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

const printResults = (polynomial, listNumber, startState, allPeriods) => {
  printVariantData(polynomial, listNumber);
  printStartData(polynomial, listNumber, startState);
  printAllPeriodsData(allPeriods);
  printRecSeqAnalysisResults(allPeriods);
};

export { errors, messages, printResults };
