import { formatNumberWithIntl } from "./utils";

export const rawData = [
  {
    "transaction time":"6/28/2024 23:05:53",
    "Source Account Number": "0051129613",
    "Source BVN": 2020134567,
    "Destination ACCOUNT": 4644085468,
    "Destination BVN": 2019342186,
    "Amount": "₦20,000,000.00",
    "Transaction Data": "120002240628230551754062929388_CREDIT_0",
    "~": "",
    "Account Name": "Abdulraman Ben Ibrahim",
    "Bank Name": "HOPE PSB",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "120002240628230551754062929388_CREDIT_0",
    "Channel": "NIP INWARDS",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/28/2024 23:19:01",
    "Source Account Number": "0051129613",
    "Source BVN": 2020134567,
    "Destination ACCOUNT": 4644085468,
    "Destination BVN": 2019342186,
    "Amount": "₦19,000,000.00",
    "Transaction Data": "120002240628231900173816353271_CREDIT_0",
    "~": "",
    "Account Name": "Abdulraman Ben Ibrahim",
    "Bank Name": "HOPE PSB",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "120002240628231900173816353271_CREDIT_0",
    "Channel": "NIP INWARDS",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 0:31:53",
    "Source Account Number": 4644085468,
    "Source BVN": 2019342186,
    "Destination ACCOUNT": 6645820291,
    "Destination BVN": 2018345643,
    "Amount": "₦10,000,000.00",
    "Transaction Data": "TRF|2MPT45cdc|1806832913964978176",
    "~": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "TRF|2MPT45cdc|1806832913964978176",
    "Channel": "WEB (Mobile Chome -d427505d-0b14-485f-8223-bc597602e3e2)",
    "__1": "",
    "__2": "confusing (System suggests it failed and reversed) :: Looks like just an issue with the response code being mapped"
  },
  {
    "transaction time":"6/29/2024 0:33:21",
    "Source Account Number": 4644085468,
    "Source BVN": 2019342186,
    "Destination ACCOUNT": 6645820291,
    "Destination BVN": 2018345643,
    "Amount": "₦5,000,000.00",
    "Transaction Data": "TRF|2MPT45cdc|1806833283479621632",
    "~": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "TRF|2MPT45cdc|1806833283479621632",
    "Channel": "WEB (Mobile Chome -d427505d-0b14-485f-8223-bc597602e3e2)",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 0:34:10",
    "Source Account Number": 4644085468,
    "Source BVN": 2019342186,
    "Destination ACCOUNT": 6645820291,
    "Destination BVN": 2018345643,
    "Amount": "₦10,000,000.00",
    "Transaction Data": "TRF|2MPT45cdc|1806833486244204544",
    "~": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "TRF|2MPT45cdc|1806833486244204544",
    "Channel": "WEB (Mobile Chome -d427505d-0b14-485f-8223-bc597602e3e2)",
    "__1": "",
    "__2": "confusing(System suggests it failed and reversed)"
  },
  {
    "transaction time":"6/29/2024 0:40:17",
    "Source Account Number": 4644085468,
    "Source BVN": 2019342186,
    "Destination ACCOUNT": 6639823406,
    "Destination BVN": 2015823406,
    "Amount": "₦10,000,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 0:41:07",
    "Source Account Number": 4644085468,
    "Source BVN": 2019342186,
    "Destination ACCOUNT": 6639823406,
    "Destination BVN": 2015823406,
    "Amount": "₦5,501,080.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 0:43:49",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": 1804596281,
    "Destination BVN": 2016596281,
    "Amount": "₦8,000,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 0:47:57",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": 8186969215,
    "Destination BVN": 2019342186,
    "Amount": "₦1,500,000.00",
    "Transaction Data": "",
    "~": "intra bank",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 0:50:26",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": 6102321923,
    "Destination BVN": 2019342186,
    "Amount": "₦400,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 11:00:56",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": "Card_Request_Account",
    "Destination BVN": 2019342186,
    "Amount": "₦1,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "Card Request ( This is very serious!!)"
  },
  {
    "transaction time":"6/29/2024 11:10:34",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": "Card_Request_Account",
    "Destination BVN": 2019342186,
    "Amount": "₦1,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "Card Request ( This is very serious!!)"
  },
  {
    "transaction time":"6/29/2024 11:35:21",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": 3847478011,
    "Destination BVN": 2013478011,
    "Amount": "₦1,440,000.00",
    "Transaction Data": "",
    "~": "fcmb",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 12:01:06",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦500,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "Card Debit on_us_verve_card_purchase"
  },
  {
    "transaction time":"6/29/2024 12:01:30",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦1,000,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "Card Debit on_us_verve_card_purchase"
  },
  {
    "transaction time":"6/29/2024 12:02:45",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦500,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit on_us_verve_card_purchase"
  },
  {
    "transaction time":"6/29/2024 12:03:58",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦1,000,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit on_us_verve_card_purchase"
  },
  {
    "transaction time":"6/29/2024 12:04:39",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦1,000,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit on_us_verve_card_purchase"
  },
  {
    "transaction time":"6/29/2024 12:45:36",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": 2086916253,
    "Destination BVN": 2012916253,
    "Amount": "₦762,500.00",
    "Transaction Data": "",
    "~": "zenith",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 12:52:35",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦500,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "transaction time":"6/29/2024 12:53:25",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦2,000,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "transaction time":"6/29/2024 12:55:49",
    "Source Account Number": 6639823406,
    "Source BVN": 2015823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦500,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "transaction time":"6/29/2024 12:57:42",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦2,000,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "transaction time":"6/29/2024 12:58:23",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Destination BVN": 2019342186,
    "Amount": "₦1,000,000.00",
    "Transaction Data": "",
    "~": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "transaction time":"6/29/2024 13:18:52",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": 2086916253,
    "Destination BVN": 2012916253,
    "Amount": "₦134,400.00",
    "Transaction Data": "",
    "~": "zenith",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 13:50:49",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": "0097946297",
    "Destination BVN": 2017946297,
    "Amount": "₦5,000,000.00",
    "Transaction Data": "",
    "~": "access",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 13:51:31",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": "0097946297",
    "Destination BVN": 2017946297,
    "Amount": "₦5,000,000.00",
    "Transaction Data": "",
    "~": "access",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 13:57:07",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": "0097946297",
    "Destination BVN": 2017946297,
    "Amount": "₦556,000.00",
    "Transaction Data": "",
    "~": "access",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "transaction time":"6/29/2024 14:17:22",
    "Source Account Number": 6645820291,
    "Source BVN": 2018345643,
    "Destination ACCOUNT": 2086916253,
    "Destination BVN": 2012916253,
    "Amount": "₦2,105,940.00",
    "Transaction Data": "",
    "~": "zenith",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  }
]
export const convertToGraph = ()=>{
  const nodes = {};
    let edges = [];
    const edgesMap = {};
    const edgesAmount = {}
    rawData.forEach(transaction => {
      const sourceAccount = transaction['Source Account Number'].toString();
      const destinationAccount = transaction['Destination ACCOUNT'].toString();
      const amount = transaction['Amount'];
      const transactionRef = transaction['Transaction Ref'];
      // Create nodes if they don't already exist
      if (!nodes[sourceAccount] || (nodes[sourceAccount] && nodes[sourceAccount].data.bankName === 'Unknown')) {
        nodes[sourceAccount] = {
          id: sourceAccount ,
          label: transaction['Account Name'],
          data: {
            accountName: transaction['Account Name'],
            bankName: transaction['Bank Name'],
            "bvn": transaction['Source BVN'],
            // "destinationBVN": transaction['Destination BVN'],
          }
        };
      }
      if (!nodes[destinationAccount]) {
        nodes[destinationAccount] = {
          id: destinationAccount,
          label: `User ${destinationAccount}`,
          data: {
            accountName: "Unknown", // Default value or handle accordingly
            bankName: "Unknown",    // Default value or handle accordingly
            "bvn": transaction['Destination BVN'],
            // "destinationBVN": transaction['Destination BVN'],
          }
        };
      }
      const edgeKey = `${sourceAccount}-${destinationAccount}`;
      edgesMap[edgeKey] = edgesMap[edgeKey]? edgesMap[edgeKey] + 1 : 1;
      edgesAmount[edgeKey] = edgesAmount[edgeKey]? edgesAmount[edgeKey] + (amount?.replace?.(/[₦,.]/g, '')/100) : (amount?.replace?.(/[₦,.]/g, '')/100);
      // Add edge for the transaction
      edges.push({
        source: sourceAccount,
        target: destinationAccount,
        id: edgeKey,
        label: `${amount}`,
        data: {
          amount,
          'Transaction Date': transaction['Transaction DateTime'],
          from: sourceAccount,
          to: destinationAccount,
          transactionRef,
          "Source BVN": transaction['Source BVN'],
            "Destination BVN": transaction['Destination BVN'],
          
        }
      });
    });
    edges = edges.map(edge => ({
      ...edge,
      label: `${formatNumberWithIntl(edgesAmount[edge.id])} (${edgesMap[edge.id]})`,
      data: {
        ...edge.data,
        // totalAmount:  '₦' + edgesAmount[edge.id].toFixed(2),
        totalAmount: new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(edgesAmount[edge.id].toFixed(2))
      }
    }))
    const _nodes = Object.values(nodes)
    // edges = edges.map(edge => {
    //   const source = _nodes.find(n => n.id === edge.source);
    //   const target = _nodes.find(n => n.id === edge.target);
    //   return ({...edge, data: {...edge.data, userLabel: `${source.label} - ${target.label}` } })
    // });
    
    return  {
      nodes: _nodes,
      edges,
      // accountNames: [...accountNames]
    };
}

const convertToBTree = () => {
  const nodes = [];
  const edges = [];

  rawData.forEach((transaction, i) => {
    const sourceId = `source ${transaction["Source Account Number"]}-${transaction["Destination ACCOUNT"]}-${i}`;
    const destinationId = `destination ${transaction["Source Account Number"]}-${transaction["Destination ACCOUNT"]}-${i}`;

    if (nodes.length === 0) {
      nodes.push({
        id: sourceId,
        label: transaction["Account Name"],
        accountNumber: transaction["Source Account Number"],
      });
      nodes.push({
        id: destinationId,
        label: transaction["Account Name"],
        accountNumber: transaction["Destination ACCOUNT"],
      });
      edges.push({
        source: sourceId,
        target: destinationId,
        id: `${sourceId}-${destinationId}`,
        label: `${transaction['Amount']}`,
      });
    } else {
      let sourceNode = null;
      for (let j = i - 1; j >= 0; j--) {
        if (rawData[j]['Destination ACCOUNT'] === transaction["Source Account Number"]) {
          sourceNode = nodes.find(node => node.accountNumber === transaction["Source Account Number"]);
          if (sourceNode) break;
        }
      }

      if (sourceNode) {
        nodes.push({
          id: destinationId,
          label: transaction["Account Name"],
          accountNumber: transaction["Destination ACCOUNT"],
        });
        edges.push({
          source: sourceNode.id,
          from: sourceNode.id,
          to: destinationId,
          target: destinationId,
          id: `${sourceNode.id}-${destinationId}`,
          label: `${transaction['Amount']}`,
        });
      }
    }
  });

  return {
    nodes,
    edges,
  };
};
console.log('vvvv',convertToBTree())
export const BTREE = convertToBTree()
export const DATA = convertToGraph()
