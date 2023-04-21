import { dataValidator } from './app/utils/validator.js';
import { getData } from './app/utils/getData.js';

let isDataValid = false;

while (!isDataValid) {
  const data = await getData();

  isDataValid = dataValidator(data);
}
