/**
 * a Service used to manage the todo items
 * 
 * immagine this is going to interact with an external service
 */
TodoListJsService.$inject = ["$http"];
function TodoListJsService($http) {
	var self = this;

	this.todos = [];

	function init() {
		$http.get("/api/list").success(function (todos) {
			// do not change the instance! can be dangerous depending on how we do the bindings
			for (var i = 0; i < todos.length; i++) {
				var itm = todos[i];
				self.todos.push(itm);
			}
		});
	}

	/**
	 * adds a new task to the list!
	 */
	this.addTodo = function (task) {
		$http.post("/api/list", { "task": task }).success(function (newTodoItem) {
			// update the local copy
			self.todos.push(newTodoItem);
		});
	}
		
	/**
	 * removes a task from the list
	 */
	this.removeTodo = function (id) {
		$http.delete("/api/list/" + id).success(function (deletedItem) {
			// update the local list
			for (var i = 0; i < self.todos.length; i++) {
				if (self.todos[i].id === deletedItem.id) {
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