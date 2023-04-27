const nodeNames = {
  'И': 'И',
  'ИЛИ': 'ИЛИ',
  'И-НЕ': 'И-НЕ',
  'ИЛИ-НЕ': 'ИЛИ-НЕ',
  'УЛ': 'элемент управляемая логика',
  'ДЖ': 'элемент Джеффа'
};

const getNodeList = (nodes) => {
  let nodeListArr = [];

  for (let i = 0; i < nodes.length; i++) {
    const currentNode = nodes[i];
    const currentNodeName = nodeNames[currentNode];

    nodeListArr.push(currentNodeName);
  }

  const nodeList = nodeListArr.join(', ');

  return nodeList;
};

export { getNodeList };
