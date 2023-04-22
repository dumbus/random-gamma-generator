const getRawColumns = (allRounds, numberOfPeriods) => {
  // const allRounds = allPeriods.flat();
  // const numberOfPeriods = allRounds.length;

  const rawColumns = [];

  // № column
  const numberOfRoundColumn = ['№'];

  for (let i = 0; i < numberOfPeriods; i++) {
    const currentNumber = (i + 1).toString();

    numberOfRoundColumn.push(currentNumber);
  }
  rawColumns.push(numberOfRoundColumn);

  // state column
  const stateColumn = ['Состояние'];

  for (let i = 0; i < numberOfPeriods; i++) {
    const currentPeriod = allRounds[i].state;

    stateColumn.push(currentPeriod);
  }
  rawColumns.push(stateColumn);

  // sum column
  const sumColumn = ['Результат суммы'];

  for (let i = 0; i < numberOfPeriods; i++) {
    const currentSum = allRounds[i].sum;

    sumColumn.push(currentSum);
  }
  rawColumns.push(sumColumn);

  return rawColumns;
};

export { getRawColumns };
