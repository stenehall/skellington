var Backbone = require("backbone");

var TodoView = module.exports = Backbone.View.extend({

  tagName: "li",

  initialize: function() {
    this.listenTo(this.model, "change",  this.render);
    this.listenTo(this.model, "destroy", this.remove);
  },

  render: function() {
    this.$el.append(this.wrapper());
    this.$el.append(this.editInput());

    var completed = this.model.get("completed");
    this.$el.toggleClass("completed", completed);
    this.$el.toggleClass("active",    !completed);

    return this;
  },

  // DOM elements---------------------------------------------------------------
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
    input.addEventListener("click", this.model.toggle.bind(this.model));
    return this.checkbox = input;
  },

  titleLabel: function() {
    var label = document.createElement("label");
    label.appendChild(document.createTextNode(this.model.get("title")));
    label.addEventListener("dblclick", this.edit.bind(this));
    return this.label = label;
  },

  deleteButton: function() {
    var button = document.createElement("button");
    button.className = "destroy";
    button.addEventListener("click", this.delete.bind(this));
    return this.button = button;
  },

  editInput: function() {
    var input = document.createElement("input");
    input.className = "edit";
    input.value     = this.model.get("title");
    input.addEventListener("keypress", this.updateOnEnter.bind(this));
    return this.input = input;
  },

  edit: function(event) {
    this.$el.addClass("editing");
    this.input.focus();
  },

  // event delegates -----------------------------------------------------------
  delete: function(event) {
    this.model.destroy();
  },

  update: function(event) {
    var value = this.input.value.trim();

    if (value) {
      this.model.save({title: value});
    }

    this.$el.removeClass("editing");
  },

  updateOnEnter: function(event) {
    if (event.which === 13) {
      this.update(event);
    }
  },

});
