var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        var _this = this;
        if (todos === void 0) { todos = []; }
        this.todos = [];
        todos.forEach(function (todo) { return _this.add(todo); });
    }
    TodoService.generateTodoId = function () {
        return TodoService._lastId++;
    };
    ;
    TodoService.prototype.clone = function (src) {
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
        return this.clone(this.todos);
    };
    TodoService.prototype._find = function (todoId) {
        var filtered = this.todos.filter(function (x) {
            return x.id == todoId;
        });
        if (filtered.length) {
            return filtered[0];
        }
        return null;
    };
    TodoService.prototype.getById = function (todoId) {
        var todo = this._find(todoId);
        return this.clone(todo);
    };
    TodoService.prototype.toggle = function (todoId) {
        var todo = this._find(todoId);
        if (todo) {
            todo.state = todo.state === TodoStatus.New ? TodoStatus.Active
                : todo.state === TodoStatus.Active ? TodoStatus.New
                    : todo.state;
        }
    };
    TodoService._lastId = 0;
    return TodoService;
}());
