// generateLargeDataset.js

const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const NUM_USERS = 100;
const NUM_TRANSACTIONS = 10000;

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const transactions = [];
const nodes = {};
const edgesMap = new Map();

for (let i = 0; i < NUM_TRANSACTIONS; i++) {
  const sender_id = getRandomInt(NUM_USERS).toString();
  const receiver_id = getRandomInt(NUM_USERS).toString();
  const amount = parseFloat((Math.random() * 1000).toFixed(2));

  const transactionKey = `${sender_id}-${receiver_id}`;

  // Check if this sender-receiver pair already exists in the edges map
  if (edgesMap.has(transactionKey)) {
    // Update the amount for the existing entry
    edgesMap.get(transactionKey).amount += amount;
  } else {
    // Create a new transaction entry
    const transaction = {
      id: uuidv4(),
      sender_id,
      sender_name: `User ${sender_id}`,
      receiver_id,
      receiver_name: `User ${receiver_id}`,
      amount
    };

    transactions.push(transaction);

    // Add nodes if they don't already exist
    if (!nodes[sender_id]) {
      nodes[sender_id] = { id: sender_id, label: `User ${sender_id}` };
    }
    if (!nodes[receiver_id]) {
      nodes[receiver_id] = { id: receiver_id, label: `User ${receiver_id}` };
    }

    // Add the transaction to the edges map
    edgesMap.set(transactionKey, {
      source: sender_id,
      target: receiver_id,
      id: transactionKey,
      label: `Amount: ${amount}`,
      amount // store the amount for aggregation
    });
  }
}

// Convert edges map to an array
const edges = Array.from(edgesMap.values()).map(edge => ({
  ...edge,
  label: `Amount: ${edge.amount.toFixed(2)}` // update the label with the aggregated amount
}));

const graphData = {
  nodes: Object.values(nodes),
  edges
};

fs.writeFileSync('./src/graphData.json', JSON.stringify(graphData, null, 2));

console.log('Graph data has been saved to graphData.json');
