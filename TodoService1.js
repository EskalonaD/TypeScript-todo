var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        var _this = this;
        if (todos === void 0) { todos = []; }
        todos.forEach(function (todo) { return _this.add(todo); });
    }
    TodoService.generateTodoId = function () {
        return TodoService._lastId++;
    };
    ;
    TodoService.clone = function (src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    };
    TodoService.prototype.createTodo = function (name) {
        return {
            id: TodoService.generateTodoId(),
            name: name,
            state: TodoStatus.New,
        };
    };
    TodoService.prototype.add = function (input) {
        var name;
        if (typeof input === 'string') {
            name = input;
        }
        else if (typeof input.name === 'string') {
            name = input.name;
        }
        var todo = this.createTodo(name);
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (el) { return el.state === TodoStatus.New; });
    };
    TodoService.prototype.getAll = function () {
        return TodoService.clone(this.todos);
    };
    TodoService.prototype.getById = function (todoId) {
        this.find(todoId);
    };
    TodoService._lastId = 0;
    return TodoService;
}());
