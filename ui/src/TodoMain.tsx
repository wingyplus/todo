import * as React from 'react';

import * as item from './TodoItem';
import * as todoService from './todoService';

export class TodoMain extends React.Component<{}, { items: item.TodoItem[] }> {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { title: 'Taste JavaScript', complete: true },
      ]
    };
  }

  componentDidMount() {
    todoService.list()
      .then((items) => this.setState({ items: items }));
  }

  render() {
    return (
      <section className="main">
        <TodoList items={this.state.items} />
      </section>
    );
  }
}

function TodoList(props: { items: item.TodoItem[] }) {
  let items = props.items.map((item, index) => <TodoItem key={index} title={item.title} complete={item.complete} />);

  return (
    <ul className="todo-list">
      {items}
    </ul>
  );
}

function TodoItem(props: item.TodoItem) {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={props.complete} />
        <label>{props.title}</label>
      </div>
    </li>
  );
}
