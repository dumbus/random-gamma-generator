import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';

import { messages } from '../messenger.js';

const getData = async () => {
  const rl = readline.createInterface({ input, output });

  const polynomial = await rl.question(messages.inputPolynomialMsg);
  const listNumber = await rl.question(messages.inputListNumberMsg);
  let randomNumber = await rl.question(messages.inputRandomNumberMsg);

  const firstNode = (await rl.question(messages.inputFirstNode)).toUpperCase();
  const secondNode = (await rl.question(messages.inputSecondNode)).toUpperCase();
  const thirdNode = (await rl.question(messages.inputThirdNode)).toUpperCase();

  const nodes = [firstNode, secondNode, thirdNode];

  if (randomNumber === '') {
    randomNumber = '1';
  }

  const data = { polynomial, listNumber, randomNumber, nodes };

  rl.close();

  return data;
};

const getExitCommand = async () => {
  const rl = readline.createInterface({ input, output });

  console.log(messages.emptyLineMsg);
  await rl.question(messages.inputExitCommand);

  rl.close();
};

export { getData, getExitCommand };
