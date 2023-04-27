import { getRawNodesColumns } from '../getRawNodesColumns.js';

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

export { getNodesTable };
