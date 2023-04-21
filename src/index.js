import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';

import { dataValidator } from './utils/validator.js';

const rl = readline.createInterface({ input, output });

const polynomial = await rl.question('Введите характеристический многочлен согласно варианту:');

const listNumber = await rl.question('Введите ваш номер в списке группы:');

const data = { polynomial, listNumber };

const isDataValid = dataValidator(data);

console.log(isDataValid);

rl.close();
