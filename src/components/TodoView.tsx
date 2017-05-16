import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable, action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export class TodoView extends React.Component<any, any> {
  render() {
    const todo = this.props.todo;

    return (
      <li onDoubleClick={ this.onRename }>
        <input 
          type="checkbox"
          data-complete={todo.completed}
          checked={todo.comleted}
          onChange={this.onToggleCompleted } 
        />

        { todo.task }
        { todo.assignee ? <small>{todo.assignee.name}</small> : null }
      </li>
    );
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}

