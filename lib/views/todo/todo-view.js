var Backbone = require("backbone");

var TodoView = module.exports = Backbone.View.extend({

  tagName: "li",

  initialize: function() {
    this.listenTo(this.model, "destroy", this.remove);
  },

  render: function() {
    this.$el.append(this.wrapper());
    this.$el.append(this.editInput());
    return this;
  },

  wrapper: function() {
    var div = document.createElement("div");
    div.className = "view";

    div.appendChild(this.checkboxInput());
    div.appendChild(this.titleLabel());
    div.appendChild(this.deleteButton());

    return div;
  },

  checkboxInput: function() {
    var input = document.createElement("input");
    input.className = "toggle";
    input.type      = "checkbox";
    input.checked   = this.model.get("completed");
    return input;
  },

  titleLabel: function() {
    var label = document.createElement("label");
    label.appendChild(document.createTextNode(this.model.get("title")));
    return label;
  },

  deleteButton: function() {
    var button = document.createElement("button");
    button.className = "destroy";
    button.addEventListener("click", this.delete.bind(this));
    return button;
  },

  editInput: function() {
    var input = document.createElement("input");
    input.className = "edit";
    input.value     = this.model.get("title");
  },

  delete: function(event) {
    this.model.destroy();
  },

});
