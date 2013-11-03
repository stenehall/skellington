var Todo            = require("./models/todo"),
    TodosCollection = require("./collections/todos");

// this is only temporarily attached to window for debug purposes
window.todosCollection = new TodosCollection([], {model: Todo});
