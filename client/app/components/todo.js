'use strict';
import {Component, Inject} from 'angular2/core';
import {TodoLocalStore} from '../services/store';
import todoTemplate from './todo.html';
import {TodoHeader} from './todo_header';
import {TodoFooter} from './todo_footer';

@Component({
  selector: 'todo-app',
  template: todoTemplate,
  directives: [TodoHeader, TodoFooter]
})
export class TodoApp {
  todoStore;

  static get parameters() {
    return [[TodoLocalStore]];
  }

  constructor(todoStore) {
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

  addTodo(newItem) {
    this.todoStore.add(newItem);
  }
}
