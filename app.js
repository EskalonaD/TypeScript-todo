"use strict";
// import * as Model from './model';
// import Todo = Model.Todo;
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var DataAccess_1 = require("./DataAccess");
var todo;
var b = new DataAccess_1.TodoService([]);
b.add({
    id: 1,
    name: 'hi',
    state: model_1.TodoState.New
});
var todos = b.getAll();
todos.forEach(function (el) { return console.log(todo.name + " [" + model_1.TodoState[todo.state] + "]"); });
