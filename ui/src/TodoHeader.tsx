import * as React from 'react';

export function TodoHeader() {
  return (
    <header className="header">
      <h1>Todos</h1>
      <input className="new-todo" placeholder={'What needs to be done?'} />
    </header>
  );
}
