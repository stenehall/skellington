var Backbone = require("backbone");

var TodoView = require("./todo-view");

var TodoCollectionView = module.exports = Backbone.View.extend({

  tagName: "ul",
  id: "todo-list",

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.addAll);
    this.collection.fetch();
  },

  addOne: function(todo) {
    var view = new TodoView({model: todo});
    this.$el.append(view.render().el);
  },

  addAll: function() {
    this.$el.empty();
    this.collection.each(this.addOne, this);
  },

});
