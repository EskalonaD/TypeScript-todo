namespace DataAccess{
    //getting access to entities from another namespaces via import alias

    import Model = TodoApp.Model;
    import Todo1 = Model.Todo1;

    let _lastId: number = 0;

    function generateTodoId() {
        return _lastId++;
    }

    export interface ITodoService2 {
        getById( todoId: number): Todo1;
        getAll(): Todo1[];
        delete(todoId:number): void;
        add(todo: Todo1): Todo1;
    }

    class TodoService2 implements ITodoService2 {

    
        constructor(private todos: Todo1[]) { // access modifier
        }
    
        add(todo: Todo1) {
            todo.id = generateTodoId();
            this.todos.push(todo);
            return todo;
        }
    
        getAll(): Todo1[] {
            return [...this.todos];
        }
    
        getById(id: number): Todo1 {
            if(this.todos instanceof Array) {
    
                return this.todos.find(el => el.id === id) || null;
            }
        }
    
        delete(todoId: number): void {
            this.todos = this.todos.filter(el => el.id !== todoId);
        }
    
        protected set nextId(nextId) { //must be the same as getter access modifier
            _lastId = nextId - 1;
        }
        protected get nextId() {
            return generateTodoId();
        }

    }
}