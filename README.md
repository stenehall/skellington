Skellington
===========

This project is my take on implementing the [TodoMVC][todomvc] app using
[Backbone.js][backbone].

Albeit an introductory example, the implementation provided leaves a lot of room
for improvement.


Goals
-----

This project is putting composition first. The app will be implemented in a
piecemeal manner rather than adding all the Backbone resources in a single step.

This approach will hopefully be useful to a beginner that wants to see some
progress at regular intervals rather than waiting for a complete implementation
to see a working result.


Things we will avoid
--------------------

* `var app = app || {};` - This is all well and good, but once we load our
app into a browser, this global variable approach is pretty hackish.

* `app.Todo = Backbone.Model.extend(obj);` - Again, another globally exposed
variable.

* `app.TodoList = Backbone.Collection.extend({model: app.Todo})` - A global
relying on another global.


Critical... Stuff
-----------------

Backbone depends on [jQuery][jquery] and [underscore][underscore] and one of
these dependencies does not inherently play nice on the server side. In order to
bundle our Backbone app without exposing each component to `window` or
`window.app`, we'll have to do some clever things to connect all the
dependencies.

This project uses [browserify][browserify] along with
[browserify-shim][browserify-shim] to properly manage our exports and get
everything playing nicely together.

The [build/bundle.js][bundle] script is at the core of bundling the
`public/js/app.js` file that will be included our `index.html`.

**Note:** this static asset is re-bundled each time you run `npm start`

On that note...


Getting Started
---------------

Each commit guarantees to be in a working state. You can get the project running
using

```sh
npm install
npm start
```


[todomvc]: http://todomvc.com
[backbone]: http://backbonejs.org
[jquery]: http://jquery.com
[underscore]: http://underscorejs.org
[browserify]: https://github.com/substack/node-browserify
[browserify-shim]: https://github.com/thlorenz/browserify-shim
[bundle]: https://github.com/smotchkkiss/skellington/blob/master/build/bundle.js
