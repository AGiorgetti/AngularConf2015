namespace AngularConf15 {

	export interface ITodoListService {
		todos: ITodoItem[];
		addTodo(task: string): void; // mybe return a promise
		removeTodo(id: number): void;
	}
	
	/**
	 * a Service used to manage the todo items
	 */
	export class TodoListService implements ITodoListService { // <- ES6 class
		
		// keeps the list of tasks 
		todos: ITodoItem[] = [];

		static $inject = ["$http"];
		constructor(
			private $http: ng.IHttpService
		) {
			$http.get("/api/list").success((todos: ITodoItem[]) => { // <- ES6 arrow syntax!
				// do not change the instance! can be dangerous depending on how we do the bindings
				for(let itm of todos) { // <- Es6 for..of
					this.todos.push(itm);
				}				
			});
		}
		
		/**
		 * adds a new task to the list!
		 */
		addTodo(task: string): void {
			this.$http.post("/api/list", { "task": task }).success((newTodoItem: ITodoItem) => {
				// update the local copy
				this.todos.push(newTodoItem);
			});
		}
		
		/**
		 * removes a task from the list
		 */
		removeTodo(id: number): void {
			this.$http.delete("/api/list/" + id).success((deletedItem: ITodoItem) => {
				// update the local list
				for (let i = 0; i < this.todos.length; i++) {
					if (this.todos[i].id === deletedItem.id) {
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