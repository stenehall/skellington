var Todo            = require("./models/todo"),
    TodosCollection = require("./collections/todos"),
    AppView         = require("./views/app");

// create/append view
(function() {
  var todos = new TodosCollection([], {model: Todo});
  var view  = new AppView(todos);
  document.body.appendChild(view.render().el);

  // this is only temporarily attached to window for debug purposes
  window.todos = todos;
})();
