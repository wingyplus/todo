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

  createTodo(item: { title: string }) {
    todoService.create(item)
      .then((_item: TodoItem) => {
        this.setState({
          items: this.state.items.concat(_item)
        });
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
