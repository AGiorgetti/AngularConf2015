/**
 * an object that represents a task to complete
 * 
 * what if this object is coming from an external service and it 
 * goes out of sync due to some changes server side?
 */
function TodoItemJs(id, task) {
	this.id = id;
	this.task = task;
	this.completed = false;
}