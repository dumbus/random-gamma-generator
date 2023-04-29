import { getNewState } from './getNewState.js';
import { getSum } from './getSum.js';

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

export { getPeriod };
