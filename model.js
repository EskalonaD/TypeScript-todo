var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["New"] = 1] = "New";
    TodoStatus[TodoStatus["Active"] = 2] = "Active";
    TodoStatus[TodoStatus["Complete"] = 3] = "Complete";
    TodoStatus[TodoStatus["Deleted"] = 4] = "Deleted";
})(TodoStatus || (TodoStatus = {}));
