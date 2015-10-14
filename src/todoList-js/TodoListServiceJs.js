/**
 * a Service used to manage the todo items
 */
TodoListJsService.$inject = ["$http"];
function TodoListJsService($http) {
	
	// keeps the todo items list
	this.todos = [];
	var self = this;

	function init() {
		$http.get("/api/list").then(function (todos) {
			// do not change the instance! can be dangerous depending on how we do the bindings
			for (var i = 0; i < todos.data.length; i++) {
				var itm = todos.data[i];
				self.todos.push(itm);
			}
		});
	}

	/**
	 * adds a new task to the list!
	 */
	this.addTodo = function (task) {
		$http.post("/api/list", { "task": task }).then(function (newTodoItem) {
			// update the local copy
			self.todos.push(newTodoItem.data);
		});
	}
		
	/**
	 * removes a task from the list
	 */
	this.removeTodo = function (id) {
		$http.delete("/api/list/" + id).then(function (deletedItem) {
			// update the local list
			for (var i = 0; i < self.todos.length; i++) {
				if (self.todos[i].id === deletedItem.data.id) {
					self.todos.splice(i, 1);
					return;
				}
			}
		});
	}

	init();
}

angular.module("app")
	.service("TodoListJsService", TodoListJsService);