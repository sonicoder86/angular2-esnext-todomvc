import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

import { TodoStoreService } from '../../services/todo-store.service';
import template from './todo-footer.template.html';

@Component({
  selector: 'todo-footer',
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
export class TodoFooterComponent {
  constructor(todoStore: TodoStoreService, params: RouteParams) {
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
