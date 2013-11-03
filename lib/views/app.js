var Backbone = require("backbone");

var MainView   = require("./layout/main");

var AppView = module.exports = Backbone.View.extend({

  tagName: "section",
  id: "wrapper",

  initialize: function() {
    this.mainView = new MainView;
  },

  render: function() {
    this.$el.append(this.mainView.render().el);
    return this;
  },

});
