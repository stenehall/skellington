var Backbone = require("backbone");

var ClearCompletedView = module.exports = Backbone.View.extend({

  tagName: "button",
  id: "clear-completed",

  initialize: function() {
    this.$el.on("click", this.clearCompleted.bind(this));
    this.listenTo(this.collection, "add",     this.render);
    this.listenTo(this.collection, "remove",  this.render);
    this.listenTo(this.collection, "change",  this.render);
  },

  render: function() {
    var count = this.collection.completed().length;
    this.$el.text("Clear completed " + count);
    return this;
  },

  clearCompleted: function(event) {
    this.collection.completed().forEach(function(todo) {
      todo.destroy();
    });
    event.preventDefault();
  },

});
