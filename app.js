//Type Fundamentals
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
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    return TodoService;
}());
