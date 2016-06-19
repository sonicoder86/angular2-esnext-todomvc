import { bootstrap } from '@angular/platform-browser-dynamic';
import { routeProvider } from './components/todo.routes';

import { TodoStoreService } from './services/todo-store.service';
import { AppComponent } from './components/app/app.component';

bootstrap(AppComponent, [
  TodoStoreService,
  routeProvider,
  { provide: 'AUTHOR', useValue: 'Soós Gábor' }
]);
