'use strict';
import {Component, Inject} from 'angular2/core';
import {TodoLocalStore} from '../services/store';
import todoTemplate from './todo.html';
import {TodoHeader} from './todo_header';
import {TodoFooter} from './todo_footer';
import {TodoItem} from './todo_item';

@Component({
  selector: 'todo-app',
  template: todoTemplate,
  directives: [TodoHeader, TodoFooter, TodoItem]
})
export class TodoApp {
  constructor(todoStore: TodoLocalStore) {
    this.todoStore = todoStore;
  }

  remove(uid) {
    this.todoStore.remove(uid);
  }

  update() {
    this.todoStore.update();
  }

  getCount() {
    return this.todoStore.todos.length;
  }

  allCompleted() {
    return this.todoStore.allCompleted();
  }

  setAllTo(toggleAll) {
    this.todoStore.setAllTo(toggleAll)
  }
}
