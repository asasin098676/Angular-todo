import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.interface';
import uniqid from 'uniqid';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css'],
})
export class AddTextComponent {
  public todoInput = new FormControl<string>('', [Validators.required]);
  public todos: Todo[] = [];

  public add(value: string): void {
    this.todos.push(new Todo(uniqid(), value));
    this.todoInput.reset();
  }
}

// Read what is Services and what they are used for
// Create LocalStorage Service and implement get() set() methods with custom prefix TODO_
// Create TodoService for todos storing
// in the getTodos() method you will need to retrieve items from localstorage
// Inject LocalStorage serivce into TodoService to use localstorage functionality
// Inject todo service into the add componet and use that service for todos rendering
