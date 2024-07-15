// models/transactionModel.js

let transactions = [];

function addTransaction(transaction) {
    transaction.id = transactions.length + 1;
    transaction.status = 'created';
    transactions.push(transaction);
    return transaction;
}

function getTransactionById(transactionId) {
    return transactions.find(trans => trans.id === transactionId);
}

function updateTransaction(transactionId, updates) {
    const index = transactions.findIndex(trans => trans.id === transactionId);
    if (index !== -1) {
        transactions[index] = { ...transactions[index], ...updates };
        return transactions[index];
    }
    return null;
}

module.exports = {
    addTransaction,
    getTransactionById,
    updateTransaction
};
