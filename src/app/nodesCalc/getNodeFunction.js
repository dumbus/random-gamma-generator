const andNode = (x1, x2) => {
  if (x1 === '1' && x2 === '1') {
    return '1';
  } else {
    return '0';
  }
};

const andNotNode = (x1, x2) => {
  const andResult = andNode(x1, x2);

  if (andResult === '1') {
    return '0';
  } else {
    return '1';
  }
};

const orNode = (x1, x2) => {
  if (x1 === '1' || x2 === '1') {
    return '1';
  } else {
    return '0';
  }
};

const orNotNode = (x1, x2) => {
  const orResult = orNode(x1, x2);

  if (orResult === '1') {
    return '0';
  } else {
    return '1';
  }
};

const ulNode = (x1, x2, x3) => {
  if (x3 === '1') {
    return andNode(x1, x2);
  } else {
    return orNode(x1, x2);
  }
};

const jeffNode = (x1, x2, x3) => {
  if (x3 === '1') {
    return x1;
  } else {
    return x2;
  }
};

const getNodeFunction = (nodeType) => {
  switch (nodeType) {
  case 'И':
    return andNode;

  case 'И-НЕ':
    return andNotNode;

  case 'ИЛИ':
    return orNode;

  case 'ИЛИ-НЕ':
    return orNotNode;

  case 'УЛ':
    return ulNode;

  case 'ДЖ':
    return jeffNode;
  }
};

export { getNodeFunction };
