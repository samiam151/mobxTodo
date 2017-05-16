import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import { TodoList } from "./components/TodoList";
import { TodoStore } from './models/TodoStore';

const store = new TodoStore();
store.addTodo("read MobX tutorial");
store.addTodo("try MobX");
store.todos[1].task = "try MobX in own project";
store.todos[0].task = "grok MobX tutorial";


ReactDOM.render(
  <TodoList store={ store } />,
  document.querySelector("#root")
);
