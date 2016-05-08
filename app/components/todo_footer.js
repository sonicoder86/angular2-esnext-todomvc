import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

import { TodoStore } from '../services/todo-store.service';
import todoFooterTemplate from './todo_footer.html';

@Component({
  selector: 'todo-footer',
  template: todoFooterTemplate,
  directives: [ROUTER_DIRECTIVES]
})
export class TodoFooter {
  constructor(todoStore: TodoStore, params: RouteParams) {
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
