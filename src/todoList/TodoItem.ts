namespace AngularConf15 {
	
	/**
	 * an object that describes a task to do
	 */
	export class TodoItem {
		id: number;
		task: string;
		completed: boolean = false;
		
		constructor(id: number, task: string)
		{
			this.id = id;
			this.task = task;
		}
	}
	
}