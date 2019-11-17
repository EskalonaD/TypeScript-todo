//Type Fundamentals
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var animal = {
    name: 'fido',
    species: 'dog',
    age: calculateAge(2014),
    speak: function () {
        console.log('woof!');
    }
};
function calculateAge(birthYear) {
    return Date.now() - birthYear;
}
function totalLength(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        x.push(1);
    }
    if (typeof x === 'string') {
        x.substr(1);
    }
    return total;
}
{
    // Custom Types
}
var todo = {
    id: 1,
    name: '1',
    state: TodoState.New,
};
var $ = function (selector) {
    //HTMLElement
};
$.fn.todo = function (todo) {
    if (todo) {
        $(this).data('todo', todo);
    }
    else {
        return $(this).data('todo');
    }
};
var container = $('#container');
container.data('todo', todo);
var savedTodo = container.data('todo');
function delete1(todo) {
    if (todo.state != TodoState.Complete) {
        throw "Can't delete incompleted task";
    }
}
// Anonymous types
function totalLength1(x, y) {
    var total = x.length + y.length;
    return total;
}
//TS classes
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.prototype.add = function (todo) {
        var newId = TodoService.getNextId();
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.getNextId = function () {
        return TodoService.lastId++;
    };
    TodoService.lastId = 0;
    return TodoService;
}());
// Smart properties with accessors
var todo1 = {
    id: 15,
    name: 'learn TS',
    get state() {
        return this._state;
    },
    set state(newState) {
        if (newState == TodoState.Complete) {
            var canBeCompleted = this.state == TodoState.Active || this.state == TodoState.Deleted;
            if (!canBeCompleted) {
                throw "Todo must be Active or Deleted in orderto be marked Completed";
            }
        }
        this._state = newState;
    }
};
var SmartTodo = /** @class */ (function () {
    function SmartTodo(name) {
        this.name = name;
    }
    Object.defineProperty(SmartTodo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == TodoState.Complete) {
                var canBeCompleted = this.state == TodoState.Active || this.state == TodoState.Deleted;
                if (!canBeCompleted) {
                    throw "Todo must be Active or Deleted in orderto be marked Completed";
                }
            }
            this._state = newState;
        },
        enumerable: true,
        configurable: true
    });
    return SmartTodo;
}());
var todo2 = new SmartTodo('learn TS!!!');
// Abstract classes/methods
var TodoStateChanger = /** @class */ (function () {
    function TodoStateChanger(newState) {
        this.newState = newState;
    }
    TodoStateChanger.prototype.changeState = function (todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    };
    return TodoStateChanger;
}());
var CompleteTodoStateChanger = /** @class */ (function (_super) {
    __extends(CompleteTodoStateChanger, _super);
    // constructor() inherit if do not declared
    function CompleteTodoStateChanger() {
        return _super.call(this, TodoState.Complete) || this;
    }
    CompleteTodoStateChanger.prototype.canChangeState = function (todo) {
        return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
    };
    return CompleteTodoStateChanger;
}(TodoStateChanger));
// Controlliing visibility with access modifiers
var TodoService1 = /** @class */ (function () {
    function TodoService1(todos) {
        this.todos = todos;
    }
    TodoService1.prototype.add = function (todo) {
        var newId = TodoService.getNextId();
    };
    TodoService1.prototype.getAll = function () {
        return this.todos;
    };
    Object.defineProperty(TodoService1.prototype, "nextId", {
        get: function () {
            return TodoService1.getNextId();
        },
        set: function (nextId) {
            TodoService1.lastId = nextId - 1;
        },
        enumerable: true,
        configurable: true
    });
    TodoService1.getNextId = function () {
        return TodoService.lastId++;
    };
    TodoService1.lastId = 0;
    return TodoService1;
}());
// implementing interfaces
var TodoService2 = /** @class */ (function () {
    function TodoService2(todos) {
        this.todos = todos;
    }
    TodoService2.prototype.add = function (todo) {
        todo.id = this.nextId;
        this.todos.push(todo);
        return todo;
    };
    TodoService2.prototype.getAll = function () {
        return __spreadArrays(this.todos);
    };
    TodoService2.prototype.getById = function (id) {
        if (this.todos instanceof Array) {
            return this.todos.find(function (el) { return el.id === id; }) || null;
        }
    };
    TodoService2.prototype.delete = function (todoId) {
        this.todos = this.todos.filter(function (el) { return el.id !== todoId; });
    };
    Object.defineProperty(TodoService2.prototype, "nextId", {
        get: function () {
            return TodoService2.getNextId();
        },
        set: function (nextId) {
            TodoService2.lastId = nextId - 1;
        },
        enumerable: true,
        configurable: true
    });
    TodoService2.getNextId = function () {
        return TodoService2.lastId++;
    };
    TodoService2.lastId = 0;
    return TodoService2;
}());
//Generics
function clone(value) {
    var serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}
var a = clone('hello');
var b = a.slice(1);
var c = clone(1);
var d = clone(function (x) { return 2; });
var t = clone(function (x) { return x + 2; });
var s = function (x) { return x + 2; };
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var pair1 = new KeyValuePair('1', 20);
var pair2 = new KeyValuePair(1, '20');
var pair3 = new KeyValuePair(1, function (X) { return 1; });
var pair4 = new KeyValuePair('hi', 45);
var KeyValuePairPrineter = /** @class */ (function () {
    function KeyValuePairPrineter(pairs) {
        this.pairs = pairs;
    }
    KeyValuePairPrineter.prototype.print = function () {
        for (var _i = 0, _a = this.pairs; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log(p.key + ": " + p.value);
        }
    };
    return KeyValuePairPrineter;
}());
var printer = new KeyValuePairPrineter([pair1, pair4]);
printer.print();
// Generic Constrains
function totalLength2(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        x.push(1);
    }
    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}
function totalLength3(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        x.push(1);
    }
    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}
