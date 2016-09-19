import * as $ from 'jquery';
import { TodoItem } from './TodoItem';

export function list(): Promise<TodoItem[]> {
  return new Promise<TodoItem[]>((resolve, reject) => {
    $.get(
      'http://localhost:9090/todo/list',
      (items: TodoItem[]) => {
        resolve(items);
      }
    );
  });
}
