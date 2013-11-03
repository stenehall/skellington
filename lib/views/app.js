var Backbone = require("backbone");

var MainView   = require("./layout/main");
var FooterView = require("./layout/footer");

var AppView = module.exports = Backbone.View.extend({

  tagName: "section",
  id: "wrapper",

  initialize: function() {
    this.mainView = new MainView;
    this.footerView = new FooterView;
  },

  render: function() {
    this.$el.append(this.mainView.render().el);
    this.$el.append(this.footerView.render().el);
    return this;
  },

});
