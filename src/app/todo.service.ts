import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Todo } from './models/todo.interface';
import uniqid from 'uniqid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: Todo[] = this.getTodos();

  constructor(private localStorageService: LocalStorageService) {}

  public addTodo(value: string): void {
    this.localStorageService.set('todos', [
      ...this.todos,
      new Todo(uniqid(), value),
    ]);

    this.todos = this.getTodos();
  }

  private getTodos(): Todo[] {
    return this.localStorageService.get('todos') ?? [];
  }
}
