import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import { TodoView } from "./TodoView";
import { TodoStore } from '../models/TodoStore';

@observer
export class TodoList extends React.Component<any, any> {
  render (){
    const store: TodoStore = this.props.store;
    return (
      <div>
        {store.report}
        <ul>
          { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
        </ul>

        { store.pendingRequests > 0 ? <em>Loading...</em> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small>(double click a todo to edit)</small>
      </div>
    );
  };

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}