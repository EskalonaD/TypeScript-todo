interface Todo {
    id: number;
    name: string;
    state: TodoState;
}


interface ITodoService {
    getById( todoId: number): Todo;
    getAll(): Todo[];
    delete(todoId:number): void;
    add(todo: Todo): Todo;
}
enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}