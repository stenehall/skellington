var Todo            = require("./models/todo"),
    TodosCollection = require("./collections/todos"),
    AppView         = require("./views/app");

// this is only temporarily attached to window for debug purposes
window.todosCollection = new TodosCollection([], {model: Todo});

// create/append view
(function() {
  var view = new AppView();
  document.body.appendChild(view.render().el);
})();
