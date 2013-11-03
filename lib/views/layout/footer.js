var Backbone = require("backbone");

var FooterView = module.exports = Backbone.View.extend({

  tagName: "footer",
  id: "info",

  render: function() {
    this.$el.append(this.info());
    this.$el.append(this.originalAuthor());
    this.$el.append(this.author());
    this.$el.append(this.project());
    return this;
  },

  info: function() {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Double-click to edit a todo"));
    return p;
  },

  originalAuthor: function() {
    var a = document.createElement("a");
    a.href = "https://github.com/addyosmani";
    a.appendChild(document.createTextNode("Addy Osmani"));

    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Originally written by "));
    p.appendChild(a);

    return p;
  },

  author: function() {
    var a = document.createElement("a");
    a.href = "https://github.com/smotchkkiss";
    a.appendChild(document.createTextNode("smotchkkiss"));

    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Modified by "));
    p.appendChild(a);

    return p;
  },

  project: function() {
    var a = document.createElement("a");
    a.href = "http://todomvc.com";
    a.appendChild(document.createTextNode("TodoMVC"));

    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Part of "));
    p.appendChild(a);

    return p;
  },

});
