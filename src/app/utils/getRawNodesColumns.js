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

export { getRawNodesColumns };
