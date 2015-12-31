'use strict';
import * as uuid from 'node-uuid';
import localStorage from 'localStorage';

export class Todo {
  completed;
  editing;
  title;
  uid;

  setTitle(title) {
    this.title = title.trim();
  }

  constructor(title) {
    this.uid = uuid.v4();
    this.completed = false;
    this.editing = false;
    this.title = title.trim();
  }
}

export class TodoLocalStore {
  todos = [];

  constructor() {
    let persistedTodos = JSON.parse(localStorage.getItem('angular2-todos')) || [];

    // Normalize back into classes
    this.todos = persistedTodos.map( (todo) => {
      let ret = new Todo(todo.title);
      ret.completed = todo.completed;
      ret.uid = todo.uid;
      return ret;
    });
  }

  _updateStore() {
    localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
  }

  get(state) {
    return this.todos.filter((todo) => todo.completed === state.completed);
  }

  allCompleted() {
    return this.todos.length === this.getCompleted().length;
  }

  setAllTo(toggler) {
    this.todos.forEach((todo) => todo.completed = toggler.checked);
    this._updateStore();
  }

  removeCompleted() {
    this.todos = this.get({completed: false});
    this._updateStore();
  }

  getRemaining() {
    return this.get({completed: false});
  }

  getCompleted() {
    return this.get({completed: true});
  }

  toggleCompletion(uid) {
    let todo = this._findByUid(uid);

    if (todo) {
      todo.completed = !todo.completed;
      this._updateStore();
    }
  }

  remove(uid) {
    let todo = this._findByUid(uid);

    if (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      this._updateStore();
    }
  }

  add(title) {
    this.todos.push(new Todo(title));
    this._updateStore();
  }

  _findByUid(uid) {
    return this.todos.find((todo) => todo.uid == uid);
  }
}
