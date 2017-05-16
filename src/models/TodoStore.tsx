import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable, action, computed, autorun} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Todo} from "./Todo";

export class TodoStore {
  @observable todos = [];
  @observable pendingRequests = 0;

  constructor() {
		autorun(() => console.log(this.todos.length));
  }

  @computed get completedTodosCount() {
	  return this.todos.filter(todo => todo.completed === true).length;
  }

  @computed get report() {
		if (this.todos.length === 0) {
			return "<none>";
		}
		
		return `Next Todo: ${this.todos[0].task}. Progress: ${(this.completedTodosCount / this.todos.length * 100).toFixed(2)}%`;
  }

  public addTodo(task) {
	  this.todos.push(
			// new Todo( task, false, null )
      {
        task: task,
        completed: false,
        assignee: null
      }
	  );
  }
}
