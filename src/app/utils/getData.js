import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';

import { messages } from './messages.js';

const getData = async () => {
  const rl = readline.createInterface({ input, output });

  const polynomial = await rl.question(messages.inputPolynomialMsg);

  const listNumber = await rl.question(messages.inputListNumberMsg);

  const data = { polynomial, listNumber };

  rl.close();

  return data;
};

export { getData };
