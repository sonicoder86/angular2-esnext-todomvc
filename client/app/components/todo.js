'use strict';

import {Component, Inject} from 'angular2/core';
import {TodoLocalStore} from '../services/store';
import todoTemplate from './todo.html';

@Component({
  selector: 'todo-app',
  template: todoTemplate
})
export class TodoApp {
  todoStore;
  newTodo = '';

  static get parameters() {
    return [[TodoLocalStore]];
  }

  constructor(@Inject(TodoLocalStore) todoStore) {
    this.todoStore = todoStore;
  }

  stopEditing(todo, editedTitle) {
    todo.setTitle(editedTitle.value);
    todo.editing = false;
  }

  cancelEditingTodo(todo) {
    todo.editing = false;
  }

  updateEditingTodo(editedTitle, todo) {
    editedTitle = editedTitle.value.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoStore.remove(todo.uid);
    }

    todo.setTitle(editedTitle);
  }

  editTodo(todo) {
    todo.editing = true;
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

  toggleCompletion(uid) {
    this.todoStore.toggleCompletion(uid);
  }

  remove(uid){
    this.todoStore.remove(uid);
  }

  addTodo() {
    if (this.newTodo.trim().length) {
      this.todoStore.add(this.newTodo);
      this.newTodo = '';
    }
  }
}
