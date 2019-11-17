var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var TodoApp;
(function (TodoApp) {
    var Model;
    (function (Model) {
        var TodoState1;
        (function (TodoState1) {
            TodoState1[TodoState1["New"] = 1] = "New";
            TodoState1[TodoState1["Active"] = 2] = "Active";
            TodoState1[TodoState1["Complete"] = 3] = "Complete";
            TodoState1[TodoState1["Deleted"] = 4] = "Deleted";
        })(TodoState1 = Model.TodoState1 || (Model.TodoState1 = {}));
    })(Model = TodoApp.Model || (TodoApp.Model = {}));
})(TodoApp || (TodoApp = {}));
