import { Component, EventEmitter, Output } from '@angular/core';

import { TodoStore } from '../services/todo-store.service';
import todoHeaderTemplate from './todo_header.html';

@Component({
  selector: 'todo-header',
  template: todoHeaderTemplate
})
export class TodoHeader {
  newTodo = '';

  constructor(todoStore: TodoStore) {
    this._todoStore = todoStore;
  }

  addTodo() {
    if (this.newTodo.trim().length) {
      this._todoStore.add(this.newTodo);
      this.newTodo = '';
    }
  }
}
