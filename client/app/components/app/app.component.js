import { Component, Inject } from '@angular/core';

import template from './app.template.html';

@Component({
  selector: 'todo-app',
  template: template
})
export class AppComponent {
  constructor(@Inject('AUTHOR') author) {
    this.author = author;
  }
}
