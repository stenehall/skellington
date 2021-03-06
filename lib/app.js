var Todo            = require("./models/todo"),
    TodosCollection = require("./collections/todos"),
    AppView         = require("./views/app");

(function() {
  var todos = new TodosCollection([], {model: Todo});
  var view  = new AppView({todosCollection: todos});
  document.body.appendChild(view.render().el);
})();
