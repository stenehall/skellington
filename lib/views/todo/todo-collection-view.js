var Backbone = require("backbone");

var TodoView = require("./todo-view");

var TodoCollectionView = module.exports = Backbone.View.extend({

  tagName: "ul",
  id: "todo-list",

  initialize: function(todos) {
    this.todos = todos;
    this.listenTo(this.todos, 'sync', this.addAll);
    this.todos.fetch();
  },

  addOne: function(todo) {
    var view = new TodoView({model: todo});
    this.$el.append(view.render().el);
  },

  addAll: function() {
    this.$el.empty();
    this.todos.each(this.addOne, this);
  },

});
