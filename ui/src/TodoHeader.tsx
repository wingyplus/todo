import * as React from 'react';

import { TodoItem } from './TodoItem';

interface TodoHeaderProps {
  onCreateTodo: ({ title: string }) => void;
}

interface TodoHeaderState {
  value: string;
}

export class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {

  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyPress(event) {
    const val = event.target.value.trim();
    if (event.key === 'Enter' && val !== '') {
      this.props.onCreateTodo({ title: val });
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          placeholder={'What needs to be done?'}
          value={this.state.value}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange} />
      </header>
    );
  }
}
