'use strict';
import {Component, EventEmitter, Output} from 'angular2/core';
import todoHeaderTemplate from './todo_header.html';

@Component({
  selector: 'todo-header',
  template: todoHeaderTemplate
})
export class TodoHeader {
  newTodo = '';

  @Output()
  newAdded = new EventEmitter();

  addTodo() {
    if (this.newTodo.trim().length) {
      this.newAdded.next(this.newTodo);
      this.newTodo = '';
    }
  }
}
