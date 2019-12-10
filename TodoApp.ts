interface ITodoApp {
    clearCompleted(): void,
    todoService: TodoService,
    addTodo(name: string): void,
    todoList: TodoListComponent
    
}

class TodoApp implements ITodoApp {
    constructor(el: HTMLElement, todos: []) {

        this.todoService = new TodoService(todos);
        this.initialize(el);
    }
    public todoService: TodoService;

    public todoList: TodoListComponent;

    private initialize(el: HTMLElement) {
        const _this = this;

        const addTodoFormEl = el.getElementsByClassName('add-todo')[0],
            addTodoNameEl = addTodoFormEl.getElementsByTagName('input')[0],
            todoListEl = el.getElementsByClassName('todo-list')[0],
            clearCompletedEl = el.getElementsByClassName('clear-completed')[0];

        addTodoFormEl.addEventListener('submit', function (event) {
            _this.addTodo(addTodoNameEl.value)
            addTodoNameEl.value = '';
            event.preventDefault();
        });

        todoListEl.addEventListener('todo-toggle', function (event) {
            const todoId = (<CustomEvent>event).detail.todoId;
            _this.todoService.toggle(todoId);
            _this.renderTodos();
        });

        clearCompletedEl.addEventListener('click', function () {
            _this.clearCompleted();
        });

        this.todoList = new TodoListComponent(todoListEl);
    
        this.renderTodos();
    }

    private renderTodos() {
        const todos = this.todoService.getAll();
        this.todoList.render(todos);
    }

    public clearCompleted(): void {
        this.todoService.clearCompleted();
        this.renderTodos();
    }

    public addTodo(todoName: string): void {
        this.todoService.add(todoName);
        this.renderTodos();
    }

}