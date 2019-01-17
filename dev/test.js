const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
    chain: [
    {
    index: 1,
    timestamp: 1547698313715,
    transactions: [],
    nonce: 100,
    hash: "0",
    previousBlockHash: "0"
    },
    {
    index: 2,
    timestamp: 1547698350837,
    transactions: [ ],
    nonce: 18140,
    hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    previousBlockHash: "0"
    },
    {
    index: 3,
    timestamp: 1547698421406,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "0596e4301a0e11e9b3e065fb11416625",
    transactionId: "1bba76a01a0e11e9b3e065fb11416625"
    },
    {
    amount: 500,
    sender: "NFIWFEWNF232RFFSK",
    recipient: "FSNAFWWEIFNWWEN2",
    transactionId: "36ad44601a0e11e9b3e065fb11416625"
    },
    {
    amount: 20,
    sender: "NFIWFEWNF232RFFSK",
    recipient: "FSNAFWWEIFNWWEN2",
    transactionId: "3bc1c6101a0e11e9b3e065fb11416625"
    },
    {
    amount: 30,
    sender: "NFIWFEWNF232RFFSK",
    recipient: "FSNAFWWEIFNWWEN2",
    transactionId: "3f1780c01a0e11e9b3e065fb11416625"
    }
    ],
    nonce: 49001,
    hash: "00006836af26b282e3644caab13476744f926f86e106d9e8b4751c2ad53103c8",
    previousBlockHash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    index: 4,
    timestamp: 1547698459905,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "0596e4301a0e11e9b3e065fb11416625",
    transactionId: "45c7b1101a0e11e9b3e065fb11416625"
    },
    {
    amount: 40,
    sender: "NFIWFEWNF232RFFSK",
    recipient: "FSNAFWWEIFNWWEN2",
    transactionId: "552827701a0e11e9b3e065fb11416625"
    },
    {
    amount: 50,
    sender: "NFIWFEWNF232RFFSK",
    recipient: "FSNAFWWEIFNWWEN2",
    transactionId: "56ba39201a0e11e9b3e065fb11416625"
    },
    {
    amount: 60,
    sender: "NFIWFEWNF232RFFSK",
    recipient: "FSNAFWWEIFNWWEN2",
    transactionId: "587752701a0e11e9b3e065fb11416625"
    },
    {
    amount: 70,
    sender: "NFIWFEWNF232RFFSK",
    recipient: "FSNAFWWEIFNWWEN2",
    transactionId: "5a4a16a01a0e11e9b3e065fb11416625"
    }
    ],
    nonce: 1500,
    hash: "0000f6651f71ec152eee1049ec50257278967c295ede7ef97f88fc9936074b4e",
    previousBlockHash: "00006836af26b282e3644caab13476744f926f86e106d9e8b4751c2ad53103c8"
    },
    {
    index: 5,
    timestamp: 1547698482314,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "0596e4301a0e11e9b3e065fb11416625",
    transactionId: "5cba05301a0e11e9b3e065fb11416625"
    }
    ],
    nonce: 10677,
    hash: "00007d7553491f93bc913d8ceebbbecb777d715e4db0f3827b48f8b87325fe97",
    previousBlockHash: "0000f6651f71ec152eee1049ec50257278967c295ede7ef97f88fc9936074b4e"
    },
    {
    index: 6,
    timestamp: 1547698483571,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "0596e4301a0e11e9b3e065fb11416625",
    transactionId: "6a155cc01a0e11e9b3e065fb11416625"
    }
    ],
    nonce: 5434,
    hash: "000021a2358c156a8b9e229ad40b1b300d9946361b65f3d0e9db089ab7f77694",
    previousBlockHash: "00007d7553491f93bc913d8ceebbbecb777d715e4db0f3827b48f8b87325fe97"
    }
    ],
    pendingTransactions: [
    {
    amount: 12.5,
    sender: "00",
    recipient: "0596e4301a0e11e9b3e065fb11416625",
    transactionId: "6ad503401a0e11e9b3e065fb11416625"
    }
    ],
    currentNodeUrl: "http://localhost:3001",
    networkNodes: [ ]
    }

    console.log('VALID: ', bitcoin.chainIsValid(bc1['chain']));