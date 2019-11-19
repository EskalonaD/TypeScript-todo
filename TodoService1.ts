class TodoService {
    private static _lastId = 0;
    
    private static  generateTodoId(): number {
        return TodoService._lastId++;
    };
    
    private static clone(src) {
        const clone = JSON.stringify(src);
        return JSON.parse(clone);

    }
    
    
    todos: Todo[];
    constructor(todos: [] = []){
        todos.forEach(todo => this.add(todo))
    }

    private createTodo(name:string): Todo {
        return {
            id: TodoService.generateTodoId(),
            name,
            state: TodoStatus.New,
        }
    }

    add(todo: Todo): Todo
    add(todo: string): Todo
    add (input): Todo {
        let name: string; 
        if(typeof input === 'string') {
            name = input;
        } else if (typeof input.name === 'string') {
            name = input.name
        }
        const todo: Todo = this.createTodo(name);
        this.todos.push(todo);
    return todo
    }
    
    clearCompleted():void {
        this.todos = this.todos.filter(el => el.state === TodoStatus.New);
    }

    getAll():Todo[] {
        return TodoService.clone(this.todos)
    }

    getById(todoId: number): Todo {
        this.find(todoId)
    }
}