var Backbone      = require("backbone"),
    LocalStorage  = require("backbone.localstorage");

var TodosCollection = module.exports = Backbone.Collection.extend({

  localStorage: new LocalStorage('skellington'),

  incomplete: function() {
    return this.where({completed: false});
  },

  completed: function() {
    return this.where({completed: true});
  },

});
