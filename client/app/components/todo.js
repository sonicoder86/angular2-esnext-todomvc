'use strict';
import {Component, Inject} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {TodoLocalStore} from '../services/store';
import todoTemplate from './todo.html';
import {TodoHeader} from './todo_header';
import {TodoFooter} from './todo_footer';
import {TodoItem} from './todo_item';

@Component({
  selector: 'todo',
  template: todoTemplate,
  directives: [TodoHeader, TodoFooter, TodoItem]
})
export class Todo {
  constructor(todoStore: TodoLocalStore, params: RouteParams) {
    this._todoStore = todoStore;
    this._params = params;
  }

  remove(uid) {
    this._todoStore.remove(uid);
  }

  update() {
    this._todoStore.persist();
  }

  getTodos() {
    let currentStatus = this._params.get('status');
    if (currentStatus == 'completed') {
      return this._todoStore.getCompleted();
    }
    else if (currentStatus == 'active') {
      return this._todoStore.getRemaining();
    }
    else {
      return this._todoStore.todos;
    }
  }

  allCompleted() {
    return this._todoStore.allCompleted();
  }

  setAllTo(toggleAll) {
    this._todoStore.setAllTo(toggleAll.checked);
  }
}
