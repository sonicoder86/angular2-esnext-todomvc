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
    return this.todos.filter((todo: Todo) => todo.completed === state.completed);
  }

  allCompleted() {
    return this.todos.length === this.getCompleted().length;
  }

  setAllTo(toggler) {
    this.todos.forEach((t) => t.completed = toggler.checked);
    this._updateStore();
  }

  removeCompleted() {
    this.todos = this.get({completed: false});
  }

  getRemaining() {
    return this.get({completed: false});
  }

  getCompleted() {
    return this.get({completed: true});
  }

  toggleCompletion(uid) {
    for (let todo of this.todos) {
      if (todo.uid === uid) {
        todo.completed = !todo.completed;
        break;
      }
    }
    this._updateStore();
  }

  remove(uid) {
    for (let todo of this.todos) {
      if (todo.uid === uid) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        break;
      }
    }
    this._updateStore();
  }

  add(title) {
    this.todos.push(new Todo(title));
    this._updateStore();
  }
}
