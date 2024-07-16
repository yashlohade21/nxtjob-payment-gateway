const express = require('express');
const router = express.Router();

// Placeholder for in-memory payments (replace with database logic in real application)
let payments = [];

/**
 * @openapi
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         amount:
 *           type: number
 *           example: 100
 *         status:
 *           type: string
 *           example: 'processed'
 */

/**
 * @openapi
 * tags:
 *   name: Payments
 *   description: API endpoints for payments
 */

/**
 * @openapi
 * /api/payments:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 100
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 */
router.post('/', (req, res) => {
  const { amount } = req.body;
  const newPayment = {
    id: payments.length + 1,
    amount,
    status: 'created',
  };
  payments.push(newPayment);
  res.status(201).json(newPayment);
});

/**
 * @openapi
 * /api/payments:
 *   get:
 *     summary: Get all payments
 *     tags: [Payments]
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 */
router.get('/', (req, res) => {
  res.status(200).json(payments);
});

/**
 * @openapi
 * /api/payments/{id}:
 *   get:
 *     summary: Retrieve payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Payment ID
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       '404':
 *         description: Payment not found
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const payment = payments.find(p => p.id === parseInt(id));
  if (!payment) {
    return res.status(404).json({ error: 'Payment not found' });
  }
  res.status(200).json(payment);
});

/**
 * @openapi
 * /api/payments/{id}:
 *   put:
 *     summary: Update payment status
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Payment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: processed
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       '404':
 *         description: Payment not found
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const index = payments.findIndex(p => p.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Payment not found' });
  }
  payments[index].status = status;
  res.status(200).json(payments[index]);
});

/**
 * @openapi
 * /api/payments/{id}:
 *   delete:
 *     summary: Delete a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Payment ID
 *     responses:
 *       '204':
 *         description: No content
 *       '404':
 *         description: Payment not found
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = payments.findIndex(p => p.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Payment not found' });
  }
  payments.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;

