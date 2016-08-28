import { TodoListComponent } from './todo-list/todo-list.component';

export let routes = [
  { path: '', component: TodoListComponent, terminal: true },
  { path: ':status', component: TodoListComponent }
];
