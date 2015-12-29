'use strict';

export class TodoItem {
  _text;

  get text() {
    console.log(`getting value for text "${this._text}"`);
    return this._text;
  }
  set text(value) {
    this._text = value;
  }

  constructor(text) {
    this._text = text;
  }
}

export class TodoStore {
  items;

  constructor() {
    this.items = [];
  }

  addItem(newItem) {
    this.items.push(new TodoItem(newItem));
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}