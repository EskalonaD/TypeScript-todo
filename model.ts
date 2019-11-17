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

// NameSpaces

namespace TodoApp.Model {

    export interface Todo1 {
        name: string;
        id: number;
        state: TodoState1;
    }
    
}

namespace TodoApp.Model {

    export enum TodoState1 {
        New = 1,
        Active,
        Complete,
        Deleted
    }
}
//getting access to entities from another namespaces via fullnames
namespace TodoApp.Service{

    export interface ITodoService1 {
        getById( todoId: number): TodoApp.Model.Todo1;
        getAll(): TodoApp.Model.Todo1[];
        delete(todoId:number): void;
        add(todo: TodoApp.Model.Todo1): TodoApp.Model.Todo1;
    }
}

namespace DataAccess{
    //getting access to entities from another namespaces via import alias

    import Model = TodoApp.Model;
    import Todo1 = Model.Todo1
    export interface ITodoService1 {
        getById( todoId: number): Todo1;
        getAll(): Todo1[];
        delete(todoId:number): void;
        add(todo: Todo1): Todo1;
    }
}