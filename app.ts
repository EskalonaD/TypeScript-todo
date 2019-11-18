// import * as Model from './model';
// import Todo = Model.Todo;

import {Todo, TodoState as TodoThing, TodoState} from './model';

import {TodoService} from './DataAccess'

let todo: Todo ;
let b = new TodoService([]);
b.add({
    id: 1,
    name: 'hi',
    state:TodoThing.New
})

let todos = b.getAll();

todos.forEach(el => console.log(`${todo.name} [${TodoThing[todo.state]}]`))

