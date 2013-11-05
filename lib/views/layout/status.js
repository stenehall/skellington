var Backbone = require("backbone");

var IncompleteCounterView = require("../status/incomplete-counter");
var ClearCompletedView    = require("../status/clear-completed");

var StatusView = module.exports = Backbone.View.extend({

  tagName: "footer",
  id: "footer",

  initialize: function() {
    this.incompleteCounterView  = new IncompleteCounterView({collection: this.collection});
    this.clearCompletedView     = new ClearCompletedView({collection: this.collection});
  },

  render: function() {
    this.$el.append(this.incompleteCounterView.render().el);
    this.$el.append(this.clearCompletedView.render().el);
    return this;
  },

});
