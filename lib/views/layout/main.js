var Backbone = require("backbone");

var HeaderView          = require("./header"),
    StatusView          = require("./status"),
    TodoCollectionView  = require("../todo/todo-collection-view");

var MainView = module.exports = Backbone.View.extend({

  tagName: "section",
  id: "todoapp",

  initialize: function() {
    this.headerView = new HeaderView({collection: this.collection});
    this.todosView  = new TodoCollectionView({collection: this.collection});
    this.statusView = new StatusView({collection: this.collection});
    this.listenTo(this.collection, "sync", this.updateToggleAll);
  },

  render: function() {
    this.$el.append(this.headerView.render().el);
    this.$el.append(this.listWrapper());
    this.$el.append(this.statusView.render().el);
    return this;
  },

  // DOM elements --------------------------------------------------------------
  listWrapper: function() {
    var section = document.createElement("section");
    section.id  = "main";
    section.appendChild(this.toggleAllCheckbox());
    section.appendChild(this.toggleAllLabel());
    section.appendChild(this.todosView.render().el);
    return this.section = section;
  },

  toggleAllCheckbox: function() {
    var input   = document.createElement("input");
    input.id    = "toggle-all";
    input.type  = "checkbox";
    input.addEventListener("click", this.toggleAll.bind(this));
    return this.checkbox = input;
  },

  toggleAllLabel: function() {
    var label = document.createElement("label");
    label.htmlFor = "toggle-all";
    label.appendChild(document.createTextNode("Mark all as complete"));
    return this.label = label;
  },

  // event delegates -----------------------------------------------------------
  toggleAll: function(event) {
    var status = this.checkbox.checked;
    this.collection.each(function(todo) {
      todo.save({completed: status});
    });
  },

  updateToggleAll: function(event) {
    var count = this.collection.incomplete().length;
    this.checkbox.checked = (count === 0);
  },

});
