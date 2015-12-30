'use strict';
import {Component, ViewEncapsulation, Injectable, Inject} from 'angular2/core';
import toDoTemplate from './todolist.html';
import {TodoStore} from './todostore';
import {TodoItem} from './todoitem';

@Component({
  selector: 'todo-list',
  template: toDoTemplate,
  styleUrls: ['css/todolist.css'],
  encapsulation: ViewEncapsulation.Native,
  directives: [TodoItem]
})
export class ToDoList {
  newItem = '';

  static get parameters() {
    return [[TodoStore]];
  }

  constructor(@Inject(TodoStore) store) {
    this.store = store;
  }

  addItem() {
    this.store.addItem(this.newItem);
    this.newItem = '';
  }

  removeItem(item) {
    this.store.removeItem(item);
  }
}
