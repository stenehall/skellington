var Backbone = require("backbone");

var HeaderView = module.exports = Backbone.View.extend({

  tagName: "header",
  id: "header",

  render: function() {
    this.$el.append(this.banner());
    this.$el.append(this.todoInput());
    return this;
  },

  banner: function() {
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Skellington"));
    return h1;
  },

  todoInput: function() {
    var input = document.createElement("input");
    input.id          = "new-todo";
    input.placeholder = "What needs to be done?";
    input.autofocus   = true;

    input.addEventListener("keypress", this.createTodo.bind(this, input));
    return input;
  },

  createTodo: function(input, event) {
    var value = input.value.trim();

    if (event.which === 13 && value) {
      this.collection.create({title: value});
      input.value = "";
    }
  },

});
