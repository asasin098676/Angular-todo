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
