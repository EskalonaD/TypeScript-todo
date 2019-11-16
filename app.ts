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

    static lastId: number = 0;

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }

    getAll() {
        return this.todos;
    }

    static getNextId() {
        return TodoService.lastId++;
    }
}

// Smart properties with accessors

var todo1:Todo = {
    name: 'learn TS',
    get state() {
        return this._state
    },
    set state(newState) {
        if(newState == TodoState.Complete) {
            const canBeCompleted = this.state == TodoState.Active || this.state == TodoState.Deleted;
            
            if(!canBeCompleted) {
                throw "Todo must be Active or Deleted in orderto be marked Completed";
            }
        }
        this._state = newState;
    }
}

class SmartTodo {

    _state: TodoState;
    get state() {
        return this._state
    }
    set state(newState) {
        if(newState == TodoState.Complete) {
            const canBeCompleted = this.state == TodoState.Active || this.state == TodoState.Deleted;
            
            if(!canBeCompleted) {
                throw "Todo must be Active or Deleted in orderto be marked Completed";
            }
        }
        this._state = newState;

    }
    constructor(public name: string) { //create same named property and assign it to function parameter
    }
}

const todo2 = new SmartTodo('learn TS!!!');
// Abstract classes/methods

abstract class TodoStateChanger {
    constructor(protected newState: TodoState) {}

    abstract canChangeState(todo:Todo):boolean 

    changeState(todo: Todo): Todo {
        if(this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}

class CompleteTodoStateChanger extends TodoStateChanger {
    // constructor() inherit if do not declared

    constructor() {
        super(TodoState.Complete);

    }
    canChangeState(todo:Todo):boolean {

        return !!todo && (
            todo.state == TodoState.Active || todo.state ==TodoState.Deleted
        )
    }

}

// Controlliing visibility with access modifiers
class TodoService1 {

    private static lastId: number = 0;

    constructor(private todos: Todo[]) { // access modifier
    }

    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }

    private getAll() {
        return this.todos;
    }

    private set nextId(nextId) { //must be the same as getter access modifier
        TodoService1.lastId = nextId - 1;
    }
    private get nextId() {
        return TodoService1.getNextId();
    }
    static getNextId() {
        return TodoService.lastId++;
    }
}