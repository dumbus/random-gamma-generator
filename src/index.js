import { dataValidator } from './utils/validator.js';
import { getData } from './utils/getData.js';

let isDataValid = false;

while (!isDataValid) {
  const data = await getData();

  isDataValid = dataValidator(data);
}
