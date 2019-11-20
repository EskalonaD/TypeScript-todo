interface ITodoService {
    todos: Todo[];
    add(T: number | Todo): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(id: number): Todo;
    toggle(id: number): void;
}

class TodoService implements ITodoService {
    private static _lastId = 0;
    
    private static  generateTodoId(): number {
        return TodoService._lastId++;
    };
    
    private clone(src) {
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
    
    clearCompleted(): void {
        this.todos = this.todos.filter(el => el.state === TodoStatus.New);
    }

    getAll():Todo[] {
        return this.clone(this.todos)
    }

    private _find(todoId): Todo {
        var filtered = this.todos.filter(function (x) { 
            return x.id == todoId; 
        });
        
        if (filtered.length) {
            return filtered[0];
        }
        
        return null;
    }


    getById(todoId: number): Todo {
        const todo = this._find(todoId);
        return this.clone(todo);
    }

    toggle(todoId: number): void {
        const todo = this._find(todoId);

        if (todo) {
            todo.state =  todo.state === 1 ? 2 
                : todo.state === 2 ? 1
                : todo.state;
        }
    }
}