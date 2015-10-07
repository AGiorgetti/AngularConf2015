/**
 * a Service used to manage the todo items
 * 
 * immagine this is going to interact with an external service
 */
function InMemoryTodoListJsService() {
	var self = this;

	this.todos = [];

	var _idSeed = 0;
	function getNextId() {
		return _idSeed++;
	}
		
	/**
		 * adds a new task to the list!
		 */
	this.addTodo = function (task) {
		var newItem = new TodoItemJs(getNextId(), task);
		self.todos.push(newItem);
		return newItem;
	}
		
	/**
		 * removes a task from the list
		 */
	this.removeTodo = function (id) {
		for (var i = 0; i < self.todos.length; i++) {
			if (self.todos[i].id === id) {
				self.todos.splice(i, 1);
				return;
			}
		}
	}
}

// angular.module("app").service("TodoListJsService", InMemoryTodoListJsService);