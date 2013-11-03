var Backbone = require("backbone");

var HeaderView = module.exports = Backbone.View.extend({

  tagName: "header",
  id: "header",

  render: function() {

    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Skellington"));

    var input = document.createElement("input");
    input.id          = "new-todo";
    input.placeholder = "What needs to be done?";
    input.autofocus   = true;

    this.$el.append(h1);
    this.$el.append(input);

    return this;
  },

});
