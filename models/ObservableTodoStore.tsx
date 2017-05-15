import { observable, computed } from "mobx";

class ObservableTodoStore {
  @observable todos = [];
  @observable pendingRequests = 0;

  constructor() {
	mobx.autorun(() => console.log(this.report));
  }

  @computed get completedTodosCount() {
	  return this.todos.filter(todo => todo.completed === true).length;
  }

  @computed get report() {
	if (this.todos.length === 0) {
	  return "<none>";
	}
	
	return `Next Todo: ${this.todos[0].task}. Progress: ${this.completedTodosCount} / ${this.todos.length}`;
  }

  addTodo(task) {
	  this.todos.push({
		  task: task,
		  completed: false,
		  assignee: null
	  });
  }
}

export const observableTodoStore = new ObservableTodoStore();