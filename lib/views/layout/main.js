var Backbone = require("backbone");

var HeaderView = require("./header");

var MainView = module.exports = Backbone.View.extend({

  tagName: "section",
  id: "todoapp",

  initialize: function() {
    this.headerView = new HeaderView;
  },

  render: function() {
    this.$el.append(this.headerView.render().el);
    return this;
  },

});
