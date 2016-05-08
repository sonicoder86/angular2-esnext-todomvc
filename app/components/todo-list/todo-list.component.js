import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { TodoStoreService } from '../../services/todo-store.service';
import template from './todo-list.template.html';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'todo-list',
  template: template,
  directives: [TodoHeaderComponent, TodoFooterComponent, TodoItemComponent]
})
export class TodoComponent {
  constructor(todoStore: TodoStoreService, params: RouteParams) {
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
