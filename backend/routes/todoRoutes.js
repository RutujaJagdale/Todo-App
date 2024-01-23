const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: CRUD operations for Todos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         id:
 *           type: number
 *           description: Todo ID
 *         text:
 *           type: string
 *           description: Todo text
 */

/**
 * @swagger
 * /todoweb:
 *   post:
 *     summary: Create a new Todo
 *     tags: [Todos]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       '201':
 *         description: Successfully created a Todo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.post('/createtask', todoController.createTodo);

/**
 * @swagger
 * /todoweb:
 *   get:
 *     summary: Get all Todos
 *     tags: [Todos]
 *     responses:
 *       '200':
 *         description: Successfully retrieved Todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get('/gettask', todoController.getTodos);

/**
 * @swagger
 * /todoweb/{id}:
 *   put:
 *     summary: Update a Todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Todo ID
 *         schema:
 *           type: number
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       '200':
 *         description: Successfully updated a Todo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       '404':
 *         description: Todo not found
 */
router.put('/updatetodo/:id', todoController.updateTodo);

/**
 * @swagger
 * /todoweb/{id}:
 *   delete:
 *     summary: Delete a Todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Todo ID
 *         schema:
 *           type: number
 *     responses:
 *       '200':
 *         description: Todo deleted successfully
 *       '404':
 *         description: Todo not found
 */
router.post('/deletetodo', todoController.deleteTodo);

  
module.exports = router;


//http://localhost:3000/deletetodo