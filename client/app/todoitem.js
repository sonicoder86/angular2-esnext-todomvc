'use strict';
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import toDoItemTemplate from './todoitem.html';

@Component({
  selector: 'todo-item',
  template: toDoItemTemplate,
  styleUrls: ['css/todoitem.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItem {
  @Input()
  item;

  @Output()
  done = new EventEmitter();

  doneClicked() {
    this.done.next(this.item);
  }
}