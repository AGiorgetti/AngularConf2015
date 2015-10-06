namespace AngularConf15 {
	
	/**
	 * a Service used to manage the todo items
	 */
	export class TodoListService {
		
		// keeps the list of tasks 
		todos: TodoItem[] = [];
		
		// a simple incremental id policy
		private _idSeed: number = 0;
		private getNextId() {
			return this._idSeed++;
		}
		
		/**
		 * adds a new task to the list!
		 */
		addTodo(task: string): TodoItem {
			var newItm = new TodoItem(this.getNextId(), task);
			this.todos.push(newItm);
			return newItm;
		}
		
		/**
		 * removes a task from the list
		 */
		removeTodo(id: number) {
			for (let i = 0; i < this.todos.length; i++) {
				if (this.todos[i].id === id) {
					this.todos.splice(i, 1);
					return;
				}
			}
		}
	}

	angular.module("app")
		.service("TodoListService", TodoListService);

}