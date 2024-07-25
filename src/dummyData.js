// dummyData.js

const transactions = [
    { id: "1", sender_id: "1", sender_name: 'Alice', receiver_id: "2", receiver_name: 'Bob', amount: 100 },
    { id: "2", sender_id: "2", sender_name: 'Bob', receiver_id: "3", receiver_name: 'Charlie', amount: 200 },
    { id: "3", sender_id: "3", sender_name: 'Charlie', receiver_id: "4", receiver_name: 'David', amount: 300 },
    { id: "4", sender_id: "4", sender_name: 'David', receiver_id: "1", receiver_name: 'Alice', amount: 400 },
    { id: "5", sender_id: "2", sender_name: 'Bob', receiver_id: "4", receiver_name: 'David', amount: 500 },
    { id: "6", sender_id: "3", sender_name: 'Charlie', receiver_id: "1", receiver_name: 'Alice', amount: 600 }
  ];
  
  const nodes = {};
  const edges = [];
  
  transactions.forEach(tx => {
    if (!nodes[tx.sender_id]) {
      nodes[tx.sender_id] = { id: tx.sender_id, label: tx.sender_name };
    }
    if (!nodes[tx.receiver_id]) {
      nodes[tx.receiver_id] = { id: tx.receiver_id, label: tx.receiver_name };
    }
    edges.push({
      source: tx.sender_id,
      target: tx.receiver_id,
      id: tx.sender_id + '-' + tx.receiver_id,
      label: `Amount: ${tx.amount}`
    });
  });
  
export  const graphData = {
    nodes: Object.values(nodes),
    edges
  };
  
  console.log(JSON.stringify(graphData, null, 2));
  