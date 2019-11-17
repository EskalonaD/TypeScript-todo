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

var todo: Todo = {
    id: 1,
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
    id: 15,
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


// implementing interfaces

class TodoService2 implements ITodoService {

    private static lastId: number = 0;

    constructor(private todos: Todo[]) { // access modifier
    }

    add(todo: Todo) {
        todo.id = this.nextId;
        this.todos.push(todo);
        return todo;
    }

    getAll(): Todo[] {
        return [...this.todos];
    }

    getById(id: number): Todo {
        if(this.todos instanceof Array) {

            return this.todos.find(el => el.id === id) || null;
        }
    }

    delete(todoId: number): void {
        this.todos = this.todos.filter(el => el.id !== todoId);
    }

    protected set nextId(nextId) { //must be the same as getter access modifier
        TodoService2.lastId = nextId - 1;
    }
    protected get nextId() {
        return TodoService2.getNextId();
    }
    static getNextId() {
        return TodoService2.lastId++;
    }
}


//Generics

function clone<T>(value: T): T {
    let serialized = JSON.stringify(value);
    return <T>JSON.parse(serialized);
}


let a = clone('hello');
let b = a.slice(1);
let c = clone(1);
let d = clone(x=>2)
var t = clone(function (x: number):number { return x + 2; });
var s = function (x: number):number { return x + 2; };


class KeyValuePair<Tkey, Tvalue>  {

    constructor(
        public key: Tkey,
        public value: Tvalue
    ) {}
}

let pair1 = new KeyValuePair('1', 20)
let pair2 = new KeyValuePair(1,'20')
let pair3 = new KeyValuePair<number, Function>(1,X=>1);
let pair4 = new KeyValuePair('hi', 45);

class KeyValuePairPrineter<T, U> {
    constructor(
        private pairs: KeyValuePair<T,U>[]
    ){}

    print() {
        for (let p of this.pairs) {
            console.log(`${p.key}: ${p.value}`)
        } 
    }
}

let printer = new KeyValuePairPrineter([pair1, pair4]);
printer.print();

// Generic Constrains

function totalLength2<T extends {length: number, slice(number):T}> (x: T,y: T): number {
    let total: number = x.length + y.length;
    x.slice(0);
    if(x instanceof Array) {

        x.push(1);
    }

    if( x instanceof String){

        x.substr(1)
    }
    return total;
}

 interface IHaveLengthAndSlice<K> {
    length: number, slice(number):K
}

function totalLength3<T extends IHaveLengthAndSlice<T>> (x: T,y: T): number {
    let total: number = x.length + y.length;
    x.slice(0);
    if(x instanceof Array) {

        x.push(1);
    }

    if( x instanceof String){

        x.substr(1)
    }
    return total;
}