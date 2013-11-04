var Backbone = require("backbone");

var HeaderView          = require("./header"),
    TodoCollectionView  = require("../todo/todo-collection-view");

var MainView = module.exports = Backbone.View.extend({

  tagName: "section",
  id: "todoapp",

  initialize: function(options) {
    var options = options || {};
    this.headerView = new HeaderView({collection: options.todosCollection});
    this.todosView  = new TodoCollectionView({collection: options.todosCollection});
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
