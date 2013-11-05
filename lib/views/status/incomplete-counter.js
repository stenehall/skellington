var Backbone = require("backbone");

var IncompleteCounterView = module.exports = Backbone.View.extend({

  tagName: "span",
  id: "todo-count",

  initialize: function() {
    this.listenTo(this.collection, "add",     this.refresh);
    this.listenTo(this.collection, "remove",  this.refresh);
    this.listenTo(this.collection, "change",  this.refresh);
  },

  render: function() {
    var count = this.collection.incomplete().length;
    this.$el.append(this.counter(count));
    this.$el.append(this.counterText(count));
    return this;
  },

  counter: function(count) {
    var strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(count));
    return strong;
  },

  counterText: function(count) {
    return document.createTextNode(count === 1 ? " item left" : " items left");
  },

  refresh: function() {
    this.$el.empty();
    this.render();
  },

});
