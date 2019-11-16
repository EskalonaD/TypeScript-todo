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
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todo = {
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
