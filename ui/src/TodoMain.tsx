import * as React from 'react';

import * as item from './TodoItem';

export class TodoMain extends React.Component<{ items: item.TodoItem[] }, {}> {
  render() {
    return (
      <section className="main">
        <TodoList items={this.props.items} />
      </section>
    );
  }
}

function TodoList(props: { items: item.TodoItem[] }) {
  let items = props.items.map((item, index) => <TodoItem key={index} title={item.title} completed={item.completed} />);

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
        <input className="toggle" type="checkbox" defaultChecked={props.completed} />
        <label>{props.title}</label>
      </div>
    </li>
  );
}
