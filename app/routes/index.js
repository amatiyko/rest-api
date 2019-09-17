const toDoRoutes = require('./todo_routes');

module.exports = function(app, db) {
  toDoRoutes(app,db);
}