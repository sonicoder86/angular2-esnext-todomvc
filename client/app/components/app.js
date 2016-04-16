import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import appTemplate from './app.html';
import {Todo} from './todo';

@Component({
  selector: 'todo-app',
  directives: [ROUTER_DIRECTIVES],
  template: appTemplate
})
@RouteConfig([
  { path: '/:status', component: Todo, name: 'Todo' }
])
export class App {
}