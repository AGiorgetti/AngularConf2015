namespace AngularConf15 {

	export interface ITodoListService {
		todos: ITodoItem[];
		addTodo(task: string): void;
		removeTodo(id: number): void;
	}

}
	