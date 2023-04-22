import { getNewState } from './getNewState.js';
import { getSum } from './getSum.js';

const getPeriod = (startState, addictiveBits) => {
  const stateArr = [];
  const sumArr = [];
  const periodItems = [];

  let state = startState;
  let sum;

  let i = 0;

  let isPeriodFinished = false;

  while (!isPeriodFinished) {
    sum = getSum(state, addictiveBits);

    const periodItem = {
      state,
      sum
    };

    stateArr.push(state);
    sumArr.push(sum);
    periodItems.push(periodItem);

    // debug
    console.log(`i: ${i}, state: ${state}, sum: ${sum}`);

    const newState = getNewState(state, sum);

    if (stateArr.includes(newState)) {
      isPeriodFinished = true;
    }
    
    state = newState;
    // debug
    i++;
  }

  return periodItems;
};

export { getPeriod };
