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

export { getRawPeriodColumns };
