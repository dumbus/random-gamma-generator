import { stdin as input, stdout as output } from 'node:process';

// node 18.x (18.14.0)
// import readline from 'node:readline/promises';

// node 15.x (15.8.0)
import readline from 'node:readline';

import { messages } from './messenger.js';

const getData = async () => {
  const rl = readline.createInterface({ input, output });

  // node 18.x (18.14.0)
  // const polynomial = await rl.question(messages.inputPolynomialMsg);
  // const listNumber = await rl.question(messages.inputListNumberMsg);

  // node 15.x (15.8.0)
  const polynomial = await new Promise(resolve => {
    rl.question(messages.inputPolynomialMsg, resolve);
  });
  const listNumber = await new Promise(resolve => {
    rl.question(messages.inputListNumberMsg, resolve);
  });

  const data = { polynomial, listNumber };

  rl.close();

  return data;
};

const getExitCommand = async () => {
  const rl = readline.createInterface({ input, output });

  console.log(messages.emptyLineMsg);
  await new Promise(resolve => {
    rl.question(messages.inputExitCommand, resolve);
  });

  rl.close();
};

export { getData, getExitCommand };
