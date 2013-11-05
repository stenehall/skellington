var Backbone = require("backbone");

var IncompleteCounterView = require("../status/incomplete-counter");

var StatusView = module.exports = Backbone.View.extend({

  tagName: "footer",
  id: "footer",

  initialize: function() {
    this.incompleteCounterView = new IncompleteCounterView({collection: this.collection});
  },

  render: function() {
    this.$el.append(this.incompleteCounterView.render().el);
    return this;
  },

});
