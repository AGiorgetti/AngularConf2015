namespace AngularConf15 {
	
	/**
	 * a Service used to manage the todo items
	 */
	export class InMemoryTodoListService implements ITodoListService {
		
		// keeps the list of tasks 
		todos: ITodoItem[] = [];
		
		// a simple incremental id policy
		private _idSeed: number = 0;
		private getNextId() {
			return this._idSeed++;
		}
		
		/**
		 * adds a new task to the list!
		 */
		addTodo(task: string) {
			let newItm = new TodoItem(this.getNextId(), task);
			this.todos.push(newItm);
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

	// angular.module("app").service("TodoListService", InMemoryTodoListService);

}