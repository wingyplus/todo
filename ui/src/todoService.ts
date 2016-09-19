import * as $ from 'jquery';
import { TodoItem } from './TodoItem';

const todoUrl = 'http://localhost:9090';

export function list(): Promise<TodoItem[]> {
  return new Promise<TodoItem[]>((resolve, reject) => {
    $.get(
      `${todoUrl}/todo/list`,
      (items: TodoItem[]) => {
        resolve(items);
      }
    );
  });
}

export function create(item: TodoItem): Promise<{}> {
  return new Promise<{}>((resolve, reject) => {
    $.post(
      `${todoUrl}/todo/create`,
      item,
      () => {
        resolve();
      },
      'json'
    );
  });
}
