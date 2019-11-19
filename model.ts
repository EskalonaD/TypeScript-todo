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