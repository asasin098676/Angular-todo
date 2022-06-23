import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../models/todo.interface';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css'],
})
export class AddTextComponent {
  public todoInput = new FormControl<string>('');
  public todos: Todo[] = [];

  public add(value: string): void {
    // TODO: add functionality for id generation
    // TODO!: check what is FormControl Validators
    // TODO: apply no value validator
    this.todos.push(new Todo('some id', value));
    this.todoInput.reset();
  }
}
