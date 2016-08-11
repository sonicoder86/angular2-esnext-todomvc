import { TodoComponent } from './todo-list/todo-list.component';

export let routes = [
  { path: '', component: TodoComponent, terminal: true },
  { path: ':status', component: TodoComponent }
];
