import { errors } from './errors.js';

const printError = (error) => {
  const errorMessage = errors[error];

  console.log(errorMessage);
};

export { printError };
