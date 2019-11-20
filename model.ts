interface Todo {
    id: number,
    name: string,
    state: number,
}

enum TodoStatus {
    New = 1,
    Active,
    Complete,
    Deleted
}
 
interface ITodoService {
    add(todo: string): Todo;
    add(todo:Todo): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(id: number): Todo;
    toggle(id: number): void;
}