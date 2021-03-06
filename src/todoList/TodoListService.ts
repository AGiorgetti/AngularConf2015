namespace AngularConf15 {

	/**
	 * a Service used to manage the todo items
	 */
	export class TodoListService implements ITodoListService { // <- ES6 class
		
		// keeps the todo items list
		todos: ITodoItem[] = [];

		static $inject = ["$http"];
		constructor(
			private $http: ng.IHttpService
		) {
			$http.get<ITodoItem[]>("/api/list").then((todos) => { // <- ES6 arrow syntax!
				// do not change the instance! can be dangerous depending on how we do the bindings
				for(let itm of todos.data) { // <- Es6 for..of
					this.todos.push(itm);
				}				
			});
		}
		
		/**
		 * adds a new task to the list!
		 */
		addTodo(task: string): void {
			this.$http.post<ITodoItem>("/api/list", { "task": task }).then((newTodoItem) => {
				// update the local copy
				this.todos.push(newTodoItem.data);
			});
		}
		
		/**
		 * removes a task from the list
		 */
		removeTodo(id: number): void {
			this.$http.delete<ITodoItem>("/api/list/" + id).then((deletedItem) => {
				// update the local list
				for (let i = 0; i < this.todos.length; i++) {
					if (this.todos[i].id === deletedItem.data.id) {
						this.todos.splice(i, 1);
						return;
					}
				}
			});
		}
	}

	angular.module("app")
		.service("TodoListService", TodoListService);

}