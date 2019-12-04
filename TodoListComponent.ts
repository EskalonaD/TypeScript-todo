interface ITodoListComponent {
    render(todos: Todo[]): void,
}


class TodoListComponent implements ITodoListComponent {
    constructor (el) {
        this.$el = $(el);
    }
    protected $el: JQuery;
    public render(todos: Todo[]): void {
        this.$el.html('');
        if(!todos.length) {
            this.$el.html(
                "<div class='list-group-item text-center text-giant'>" +
                "    <strong>You've completed everything you needed to do!</strong>" +
                "</div>"
            )
            console.log(todos)
            return;
        }

        todos.forEach((el) => this.renderTodo(el).appendTo(this.$el))

    }

    private renderTodo(todo: Todo): JQuery {
        return $(
            "<div class='todo-item list-group-item "+ (todo.state == 2 ? 'completed' : '') +"'>" +
            "   <div class='row'>" +
            "       <div class='col-md-2 text-center'>" +
            "           <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>" +
            "           <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>" +
            "       </div>" +
            "       <div class='col-md-10'>" +
            "            <span class='incomplete text-giant'>" + todo.name + "</span>" +
            "            <span class='completed text-strikethrough text-muted text-giant'>" + todo.name + "</span>" +
            "        </div>" +
            "    </div>" +
            "    <div class='clearfix'></div>" +
            "</div>"
        ).on('click', function() {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
            this.dispatchEvent(event);
        });

    }
}
