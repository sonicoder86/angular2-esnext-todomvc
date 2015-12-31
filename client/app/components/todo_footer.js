'use strict';
import {Component} from 'angular2/core';
import {TodoLocalStore} from '../services/store';
import todoFooterTemplate from './todo_footer.html';

@Component({
  selector: 'todo-footer',
  template: todoFooterTemplate
})
export class TodoFooter {
  constructor(todoStore: TodoLocalStore) {
    this.todoStore = todoStore;
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

  getCount() {
    return this.todoStore.todos.length;
  }

  getRemainingCount() {
    return this.todoStore.getRemaining().length;
  }

  hasCompleted() {
    return this.todoStore.getCompleted().length > 0;
  }
}
