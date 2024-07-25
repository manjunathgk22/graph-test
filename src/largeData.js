// generateLargeDataset.js

const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const NUM_USERS = 50;
const NUM_TRANSACTIONS = 1000;

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const transactions = [];
const nodes = {};
const edges = [];

for (let i = 0; i < NUM_TRANSACTIONS; i++) {
  const sender_id = getRandomInt(NUM_USERS) + '';
  const receiver_id = getRandomInt(NUM_USERS) + '';
  const amount = (Math.random() * 1000).toFixed(2);

  const transaction = {
    id: uuidv4(),
    sender_id,
    sender_name: `User ${sender_id}`,
    receiver_id,
    receiver_name: `User ${receiver_id}`,
    amount
  };

  transactions.push(transaction);

  if (!nodes[sender_id]) {
    nodes[sender_id] = { id: sender_id, label: `User ${sender_id}` };
  }
  if (!nodes[receiver_id]) {
    nodes[receiver_id] = { id: receiver_id, label: `User ${receiver_id}` };
  }

  edges.push({
    source: sender_id,
    target: receiver_id,
    id: sender_id+ '-' + receiver_id,
    label: `Amount: ${amount}`
  });
}

const graphData = {
  nodes: Object.values(nodes),
  edges
};

fs.writeFileSync('./src/graphData.json', JSON.stringify(graphData, null, 2));

console.log('Graph data has been saved to graphData.json');
