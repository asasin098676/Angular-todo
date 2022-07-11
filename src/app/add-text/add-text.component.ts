import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.interface';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css'],
})
export class AddTextComponent {
  public todoInput = new FormControl<string>('', [Validators.required]);
  public todos: Todo[] = [];

  public add(value: string): void {
    this.todoService.addTodo(value);

    this.todoInput.reset();
  }

  constructor(public todoService: TodoService) {}
}

// Read what is Services and what they are used for
// Create LocalStorage Service and implement get() set() methods with custom prefix TODO_
// Create TodoService for todos storing
// in the getTodos() method you will need to retrieve items from localstorage
// Inject LocalStorage serivce into TodoService to use localstorage functionality
// Inject todo service into the add componet and use that service for todos rendering
