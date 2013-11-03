var Backbone = require("backbone");

var HeaderView          = require("./header"),
    TodoCollectionView  = require("../todo/todo-collection-view");

var MainView = module.exports = Backbone.View.extend({

  tagName: "section",
  id: "todoapp",

  initialize: function() {
    this.headerView = new HeaderView;
    this.todosView  = new TodoCollectionView;
  },

  render: function() {
    this.$el.append(this.headerView.render().el);
    this.$el.append(this.listWrapper());
    return this;
  },

  listWrapper: function() {
    var section = document.createElement("section");
    section.id = "main";
    section.appendChild(this.todosView.render().el);

    return section;
  },

});
