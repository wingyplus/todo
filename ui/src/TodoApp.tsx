import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TodoHeader } from './TodoHeader';
import { TodoMain } from './TodoMain';
import { TodoItem } from './TodoItem';
import * as todoService from './todoService';


class TodoApp extends React.Component<{}, { items: TodoItem[] }>{

  constructor(props) {
    super(props);
    this.createTodo = this.createTodo.bind(this);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    todoService.list()
      .then((items) => this.setState({ items: items }));
  }

  createTodo(item: TodoItem) {
    todoService.create(item)
      .then(() => {
        this.setState({
          items: this.state.items.concat(item)
        })
      });
  }

  render() {
    return (
      <section className="todoapp" >
        <TodoHeader onCreateTodo={this.createTodo} />
        <TodoMain items={this.state.items} />
      </section >
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('todo-app'));
