// services/paymentService.js

const transactionModel = require('../models/transactionModel');

async function createTransaction(amount, paymentMethod, userId) {
    const newTransaction = {
        amount,
        paymentMethod,
        userId
    };
    return transactionModel.addTransaction(newTransaction);
}

async function processPayment(transactionId) {
    const transaction = transactionModel.getTransactionById(transactionId);
    if (!transaction) {
        throw new Error('Transaction not found');
    }
    // Implement payment processing logic here (e.g., call external payment API)
    // For demonstration, just updating status
    return transactionModel.updateTransaction(transactionId, { status: 'processed' });
}

async function refundPayment(transactionId) {
    const transaction = transactionModel.getTransactionById(transactionId);
    if (!transaction) {
        throw new Error('Transaction not found');
    }
    // Implement refund logic here
    return transactionModel.updateTransaction(transactionId, { status: 'refunded' });
}

async function getTransaction(transactionId) {
    return transactionModel.getTransactionById(transactionId);
}

module.exports = {
    createTransaction,
    processPayment,
    refundPayment,
    getTransaction
};
