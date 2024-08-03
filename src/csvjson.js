import { formatNumberWithIntl } from "./utils";

export const rawData = [
  {
    "Transaction DateTime": "6/28/2024 23:05:53",
    "Source Account Number": "0051129613",
    "Destination ACCOUNT": 4644085468,
    "Amount": "₦20,000,000.00",
    "Transaction Data": "120002240628230551754062929388_CREDIT_0",
    "": "",
    "Account Name": "Abdulraman Ben Ibrahim",
    "Bank Name": "HOPE PSB",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "120002240628230551754062929388_CREDIT_0",
    "Channel": "NIP INWARDS",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/28/2024 23:19:01",
    "Source Account Number": "0051129613",
    "Destination ACCOUNT": 4644085468,
    "Amount": "₦19,000,000.00",
    "Transaction Data": "120002240628231900173816353271_CREDIT_0",
    "": "",
    "Account Name": "Abdulraman Ben Ibrahim",
    "Bank Name": "HOPE PSB",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "120002240628231900173816353271_CREDIT_0",
    "Channel": "NIP INWARDS",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 0:31:53",
    "Source Account Number": 4644085468,
    "Destination ACCOUNT": 6645820291,
    "Amount": "₦10,000,000.00",
    "Transaction Data": "TRF|2MPT45cdc|1806832913964978176",
    "": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "TRF|2MPT45cdc|1806832913964978176",
    "Channel": "WEB (Mobile Chome -d427505d-0b14-485f-8223-bc597602e3e2)",
    "__1": "",
    "__2": "confusing (System suggests it failed and reversed) :: Looks like just an issue with the response code being mapped"
  },
  {
    "Transaction DateTime": "6/29/2024 0:33:21",
    "Source Account Number": 4644085468,
    "Destination ACCOUNT": 6645820291,
    "Amount": "₦5,000,000.00",
    "Transaction Data": "TRF|2MPT45cdc|1806833283479621632",
    "": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "TRF|2MPT45cdc|1806833283479621632",
    "Channel": "WEB (Mobile Chome -d427505d-0b14-485f-8223-bc597602e3e2)",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 0:34:10",
    "Source Account Number": 4644085468,
    "Destination ACCOUNT": 6645820291,
    "Amount": "₦10,000,000.00",
    "Transaction Data": "TRF|2MPT45cdc|1806833486244204544",
    "": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "TRF|2MPT45cdc|1806833486244204544",
    "Channel": "WEB (Mobile Chome -d427505d-0b14-485f-8223-bc597602e3e2)",
    "__1": "",
    "__2": "confusing(System suggests it failed and reversed)"
  },
  // {
  //   "Transaction DateTime": "6/29/2024 0:37:53",
  //   "Source Account Number": 4644085468,
  //   "Destination ACCOUNT": 4644085468,
  //   "Amount": "₦10,000,000.00",
  //   "Transaction Data": "",
  //   "": "",
  //   "Account Name": "abubakar ismail",
  //   "Bank Name": "MONIEPOINT",
  //   "Transaction Type": "DEBIT",
  //   "Transaction Ref": "",
  //   "Channel": "",
  //   "__1": 1804596281,
  //   "__2": "Attempt to send to  access bank  ISMAIL ABUBAKAR,(1804596281) Transfer failed and was  reversed , it rightly failed with the error message 'Daily Deposit Transaction Limit via MOBILE exceeded'"
  // },
  // {
  //   "Transaction DateTime": "6/29/2024 0:38:53",
  //   "Source Account Number": 4644085468,
  //   "Destination ACCOUNT": 4644085468,
  //   "Amount": "₦6,000,000.00",
  //   "Transaction Data": "",
  //   "": "",
  //   "Account Name": "abubakar ismail",
  //   "Bank Name": "MONIEPOINT",
  //   "Transaction Type": "CREDIT",
  //   "Transaction Ref": "",
  //   "Channel": "",
  //   "__1": "",
  //   "__2": "REVERSAL LEG"
  // },
  {
    "Transaction DateTime": "6/29/2024 0:40:17",
    "Source Account Number": 4644085468,
    "Destination ACCOUNT": 6639823406,
    "Amount": "₦10,000,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 0:41:07",
    "Source Account Number": 4644085468,
    "Destination ACCOUNT": 6639823406,
    "Amount": "₦5,501,080.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 0:43:49",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": 1804596281,
    "Amount": "₦8,000,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  // {
  //   "Transaction DateTime": "6/29/2024 0:46:11",
  //   "Source Account Number": 6639823406,
  //   "Destination ACCOUNT": 6639823406,
  //   "Amount": "₦5,000,000.00",
  //   "Transaction Data": "",
  //   "": "",
  //   "Account Name": "abubakar ismail - abubakar ismail",
  //   "Bank Name": "MONIEPOINT",
  //   "Transaction Type": "DEBIT",
  //   "Transaction Ref": "",
  //   "Channel": "",
  //   "__1": 8186969215,
  //   "__2": "Attempt to send to  OPAY bank  RIDWAN ABIODUN IBRAHIM,(8186969215) Transfer failed and was  reversed , it rightly failed with the error message 'Daily Deposit Transaction Limit via MOBILE exceeded'"
  // },
  // {
  //   "Transaction DateTime": "6/29/2024 0:47:20",
  //   "Source Account Number": 6639823406,
  //   "Destination ACCOUNT": 6639823406,
  //   "Amount": "₦2,000,000.00",
  //   "Transaction Data": "",
  //   "": "",
  //   "Account Name": "abubakar ismail - abubakar ismail",
  //   "Bank Name": "MONIEPOINT",
  //   "Transaction Type": "DEBIT",
  //   "Transaction Ref": "",
  //   "Channel": "",
  //   "__1": 8186969215,
  //   "__2": "Attempt to send to  OPAY bank  RIDWAN ABIODUN IBRAHIM,(8186969215) Transfer failed and was  reversed , it rightly failed with the error message 'Daily Deposit Transaction Limit via MOBILE exceeded'"
  // },
  {
    "Transaction DateTime": "6/29/2024 0:47:57",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": 8186969215,
    "Amount": "₦1,500,000.00",
    "Transaction Data": "",
    "": "intra bank",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  // {
  //   "Transaction DateTime": "6/29/2024 0:49:09",
  //   "Source Account Number": 6639823406,
  //   "Destination ACCOUNT": 6639823406,
  //   "Amount": "₦1,000,000.00",
  //   "Transaction Data": "",
  //   "": "",
  //   "Account Name": "abubakar ismail - abubakar ismail",
  //   "Bank Name": "MONIEPOINT",
  //   "Transaction Type": "DEBIT",
  //   "Transaction Ref": "",
  //   "Channel": "",
  //   "__1": 6102321923,
  //   "__2": "Attempt to send to  OPAY bank  RIDWAN ABIODUN IBRAHIM,(6102321923) Transfer failed and was  reversed , it rightly failed with the error message 'Daily Deposit Transaction Limit via MOBILE exceeded'"
  // },
  // {
  //   "Transaction DateTime": "6/29/2024 0:49:51",
  //   "Source Account Number": 6639823406,
  //   "Destination ACCOUNT": 6639823406,
  //   "Amount": "₦499,000.00",
  //   "Transaction Data": "",
  //   "": "",
  //   "Account Name": "abubakar ismail - abubakar ismail",
  //   "Bank Name": "MONIEPOINT",
  //   "Transaction Type": "DEBIT",
  //   "Transaction Ref": "",
  //   "Channel": "",
  //   "__1": 6102321923,
  //   "__2": "Attempt to send to  OPAY bank  RIDWAN ABIODUN IBRAHIM,(6102321923) Transfer failed and was  reversed , it rightly failed with the error message 'Daily Deposit Transaction Limit via MOBILE exceeded'"
  // },
  {
    "Transaction DateTime": "6/29/2024 0:50:26",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": 6102321923,
    "Amount": "₦400,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  // {
  //   "Transaction DateTime": "6/29/2024 1:51:21",
  //   "Source Account Number": 6639823406,
  //   "Destination ACCOUNT": 6639823406,
  //   "Amount": "₦2,000,000.00",
  //   "Transaction Data": "",
  //   "": "",
  //   "Account Name": "abubakar ismail - abubakar ismail",
  //   "Bank Name": "MONIEPOINT",
  //   "Transaction Type": "DEBIT",
  //   "Transaction Ref": "",
  //   "Channel": "",
  //   "__1": 8186969215,
  //   "__2": "Attempt to send to  OPAY bank  RIDWAN ABIODUN IBRAHIM,(8186969215) Transfer failed and was  reversed , it rightly failed with the error message 'Daily Deposit Transaction Limit via MOBILE exceeded'"
  // },
  // {
  //   "Transaction DateTime": "6/29/2024 1:51:42",
  //   "Source Account Number": 6639823406,
  //   "Destination ACCOUNT": 6639823406,
  //   "Amount": "₦200,000.00",
  //   "Transaction Data": "",
  //   "": "",
  //   "Account Name": "abubakar ismail - abubakar ismail",
  //   "Bank Name": "MONIEPOINT",
  //   "Transaction Type": "DEBIT",
  //   "Transaction Ref": "",
  //   "Channel": "",
  //   "__1": 6102321923,
  //   "__2": "Attempt to send to  OPAY bank  RIDWAN ABIODUN IBRAHIM,(8186969215) Transfer failed and was  reversed , it rightly failed with the error message 'Daily Deposit Transaction Limit via MOBILE exceeded'"
  // },
  // {
  //   "Transaction DateTime": "6/29/2024 5:29:50",
  //   "Source Account Number": 6639823406,
  //   "Destination ACCOUNT": 6639823406,
  //   "Amount": "₦2,000,000.00",
  //   "Transaction Data": "",
  //   "": "",
  //   "Account Name": "abubakar ismail - abubakar ismail",
  //   "Bank Name": "MONIEPOINT",
  //   "Transaction Type": "DEBIT",
  //   "Transaction Ref": "",
  //   "Channel": "",
  //   "__1": 6102321923,
  //   "__2": "Attempt to send to  OPAY bank  RIDWAN ABIODUN IBRAHIM,(6102321923) Transfer failed and was  reversed , it rightly failed with the error message 'Daily Deposit Transaction Limit via MOBILE exceeded'"
  // },
  {
    "Transaction DateTime": "6/29/2024 11:00:56",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": "Card_Request_Account",
    "Amount": "₦1,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "Card Request ( This is very serious!!)"
  },
  {
    "Transaction DateTime": "6/29/2024 11:10:34",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": "Card_Request_Account",
    "Amount": "₦1,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "Card Request ( This is very serious!!)"
  },
  {
    "Transaction DateTime": "6/29/2024 11:35:21",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": 3847478011,
    "Amount": "₦1,440,000.00",
    "Transaction Data": "",
    "": "fcmb",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 12:01:06",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦500,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "Card Debit on_us_verve_card_purchase"
  },
  {
    "Transaction DateTime": "6/29/2024 12:01:30",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦1,000,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "Card Debit on_us_verve_card_purchase"
  },
  {
    "Transaction DateTime": "6/29/2024 12:02:45",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦500,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit on_us_verve_card_purchase"
  },
  {
    "Transaction DateTime": "6/29/2024 12:03:58",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦1,000,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit on_us_verve_card_purchase"
  },
  {
    "Transaction DateTime": "6/29/2024 12:04:39",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦1,000,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit on_us_verve_card_purchase"
  },
  {
    "Transaction DateTime": "6/29/2024 12:45:36",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": 2086916253,
    "Amount": "₦762,500.00",
    "Transaction Data": "",
    "": "zenith",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 12:52:35",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦500,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "Transaction DateTime": "6/29/2024 12:53:25",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦2,000,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "Transaction DateTime": "6/29/2024 12:55:49",
    "Source Account Number": 6639823406,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦500,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "abubakar ismail - abubakar ismail",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "Transaction DateTime": "6/29/2024 12:57:42",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦2,000,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "Transaction DateTime": "6/29/2024 12:58:23",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": "Card_acquirer_account",
    "Amount": "₦1,000,000.00",
    "Transaction Data": "",
    "": "",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": "card debit isw_verve_card_transfer"
  },
  {
    "Transaction DateTime": "6/29/2024 13:18:52",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": 2086916253,
    "Amount": "₦134,400.00",
    "Transaction Data": "",
    "": "zenith",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 13:50:49",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": "0097946297",
    "Amount": "₦5,000,000.00",
    "Transaction Data": "",
    "": "access",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 13:51:31",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": "0097946297",
    "Amount": "₦5,000,000.00",
    "Transaction Data": "",
    "": "access",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 13:57:07",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": "0097946297",
    "Amount": "₦556,000.00",
    "Transaction Data": "",
    "": "access",
    "Account Name": "IBRAHIM RIDWAN ABIODUN",
    "Bank Name": "MONIEPOINT",
    "Transaction Type": "DEBIT",
    "Transaction Ref": "",
    "Channel": "",
    "__1": "",
    "__2": ""
  },
  {
    "Transaction DateTime": "6/29/2024 14:17:22",
    "Source Account Number": 6645820291,
    "Destination ACCOUNT": 2086916253,
    "Amount": "₦2,105,940.00",
    "Transaction Data": "",
    "": "zenith",
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
          id: sourceAccount,
          label: transaction['Account Name'],
          data: {
            accountName: transaction['Account Name'],
            bankName: transaction['Bank Name']
          }
        };
      }
      if (!nodes[destinationAccount]) {
        nodes[destinationAccount] = {
          id: destinationAccount,
          label: `User ${destinationAccount}`,
          data: {
            accountName: "Unknown", // Default value or handle accordingly
            bankName: "Unknown"    // Default value or handle accordingly
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

export const DATA = convertToGraph()

console.log('qqqq',rawData)