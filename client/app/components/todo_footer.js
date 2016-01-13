'use strict';
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {TodoLocalStore} from '../services/store';
import todoFooterTemplate from './todo_footer.html';

@Component({
  selector: 'todo-footer',
  template: todoFooterTemplate,
  directives: [ROUTER_DIRECTIVES]
})
export class TodoFooter {
  constructor(todoStore: TodoLocalStore, params: RouteParams) {
    this._todoStore = todoStore;
    this._params = params;
  }

  removeCompleted() {
    this._todoStore.removeCompleted();
  }

  getCount() {
    return this._todoStore.todos.length;
  }

  getRemainingCount() {
    return this._todoStore.getRemaining().length;
  }

  hasCompleted() {
    return this._todoStore.getCompleted().length > 0;
  }

  getStatus() {
    return this._params.get('status');
  }
}
