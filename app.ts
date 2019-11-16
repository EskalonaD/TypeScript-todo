//Type Fundamentals

var animal = { 
    name: 'fido', 
    species: 'dog', 
    age: calculateAge(2014), 
    speak: function() {
        console.log('woof!')
    }
}

function calculateAge(birthYear) {
    return Date.now() - birthYear
}


function totalLength (x: string,y: string): number
function totalLength (x: any[], y: any[]): number
function totalLength (x: (any[] | string),y: (any[] |string)): number {
    let total: number = x.length + y.length;
    x.slice(0);
    if(x instanceof Array) {

        x.push(1);
    }

    if(typeof x === 'string'){

        x.substr(1)
    }
    return total;
}


{

    // Custom Types
    
}
interface Todo {
    name: string;
    state: TodoState;
}


interface ITodoService {
    getById( todoId: number): Todo;
    getAll(): Todo[];
    delete(todoId:number): void;
    add(todo: Todo): Todo;
}
enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

var todo: Todo = {
    name: '1',
    state: TodoState.New,
}

interface jQuery {
    (selector: string): jQueryElement;
    version: number;

}

interface jQuery {
    fn?: any;
}

interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;

}


const $ = <jQuery>function(selector) {
    //HTMLElement
};
$.fn.todo = function(todo?: Todo): Todo {

    if(todo) {
        $(this).data('todo', todo)
    } else {
        return $(this).data('todo');
    }
    
}
var container = $('#container');
container.data('todo', todo);
var savedTodo = container.data('todo');


function delete1(todo: Todo) {
    if(todo.state != TodoState.Complete) {
        throw `Can't delete incompleted task`
    }
}

// Anonymous types

function totalLength1 (x: { length: number},y: { length: number}): number {
    let total: number = x.length + y.length;
    return total;
}

//TS classes

class TodoService {

    constructor(private todos: Todo[]) {
    }

    getAll() {
        return this.todos;
    }
}