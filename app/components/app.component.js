import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import template from './app.template.html';
import { TodoComponent } from './todo-list.component';

@Component({
  selector: 'todo-app',
  directives: [ROUTER_DIRECTIVES],
  template: template
})
@RouteConfig([
  { path: '/:status', component: TodoComponent, name: 'Todo' }
])
export class AppComponent {}
