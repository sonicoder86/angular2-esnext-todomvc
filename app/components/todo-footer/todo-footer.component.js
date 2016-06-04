import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteSegment } from '@angular/router';

import { TodoStoreService } from '../../services/todo-store.service';
import template from './todo-footer.template.html';

@Component({
  selector: 'todo-footer',
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
export class TodoFooterComponent {
  constructor(todoStore: TodoStoreService, route: RouteSegment) {
    this._todoStore = todoStore;
    this._route = route;
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
    return this._route.parameters.status || '';
  }
}
