import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css']
})
export class AddTextComponent implements OnInit {

  public todoInput = new FormControl()

  constructor() { }
  
  ngOnInit(): void {
    this.todoInput.valueChanges.subscribe(val => console.log(val))
  }
  add(){
    const div = document.getElementById('div')
    const p = document.createElement('p')
    div?.appendChild(p)
     p.innerHTML = this.todoInput.value
     console.log(div?.children.length)
     const it = div?.children.length;
  
  }

  
  
  
}

