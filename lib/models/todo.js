var Backbone = require("backbone");

var Todo = module.exports = Backbone.Model.extend({

  defaults: function() {
    return {
      title: "",
      completed: false,
      createdAt: Date.now(),
    };
  },

});
