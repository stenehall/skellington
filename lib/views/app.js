var Backbone = require("backbone");

var MainView   = require("./layout/main");
var FooterView = require("./layout/footer");

var AppView = module.exports = Backbone.View.extend({

  tagName: "section",
  id: "wrapper",

  initialize: function(options) {
    var options = options || {};
    this.mainView = new MainView({todosCollection: options.todosCollection});
    this.footerView = new FooterView;
  },

  render: function() {
    this.$el.append(this.mainView.render().el);
    this.$el.append(this.footerView.render().el);
    return this;
  },

});
