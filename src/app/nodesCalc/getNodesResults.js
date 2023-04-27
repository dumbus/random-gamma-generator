import { getNodeFunction } from './getNodeFunction.js';
import { getPeriodStates } from '../periodCalc/getPeriodStates.js';

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

export { getNodesResults };
