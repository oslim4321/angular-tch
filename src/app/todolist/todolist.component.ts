import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [NgFor, NgClass, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  list = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 3, text: 'Task 3', completed: false },
  ];

  todo = '';

  handleAddTodo() {
    let obj = {
      id: this.list.length + 1,
      text: this.todo,
      completed: false,
    };

    this.list.push(obj);
    this.todo = '';
  }
}
