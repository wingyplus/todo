import * as $ from 'jquery';
import { TodoItem } from './TodoItem';

const todoUrl = 'http://localhost:9090';

export function list(): Promise<TodoItem[]> {
  return new Promise<TodoItem[]>((resolve, reject) => {
    $.get(
      `${todoUrl}/todos`,
      (items: TodoItem[]) => {
        resolve(items);
      }
    );
  });
}

export function create(item: { title: string }): Promise<{}> {
  return new Promise<{}>((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${todoUrl}/todos`,
      contentType: 'application/json',
      data: JSON.stringify(item),
      success: () => resolve({ title: item.title, completed: false }),
    });
  });
}
