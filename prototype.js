//Static properties

function TodoService() {

}

TodoService.lastId= 0;

TodoService.getNextId = function() {
    return TodoService.lastId++;
}

TodoService.prototype.add = function(todo) {
    var newId = TodoService.getNextId();
}