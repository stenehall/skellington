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
  },

  render: function() {
    this.$el.append(this.headerView.render().el);
    this.$el.append(this.listWrapper());
    this.$el.append(this.statusView.render().el);
    return this;
  },

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
    return this.checkbox = input;
  },

  toggleAllLabel: function() {
    var label = document.createElement("label");
    label.htmlFor = "toggle-all";
    label.appendChild(document.createTextNode("Mark all as complete"));
    return this.label = label;
  },

});
