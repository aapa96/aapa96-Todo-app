var express = require('express');
var todoController = require('./controller');
var api = express.Router();

api.get('/todo_controller',todoController.test);

api.post('/todo',todoController.createTodo);
api.get('/todo',todoController.readTodo);
api.put('/todo/:id',todoController.updateTodo);
api.delete('/todo/:id',todoController.deleteTodo);



module.exports=api;