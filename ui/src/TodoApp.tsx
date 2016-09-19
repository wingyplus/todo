import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TodoHeader } from './TodoHeader';
import { TodoMain } from './TodoMain';


function TodoApp() {
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoMain />
    </section>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById('todo-app'));
