const getPeriodSums = (period) => {
  const sums = [];

  for (let i = 0; i < period.length; i++) {
    sums.push(period[i].sum);
  }

  return sums;
};

export { getPeriodSums };
