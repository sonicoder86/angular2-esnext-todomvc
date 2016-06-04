import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';

import { TodoStoreService } from './services/todo-store.service';
import { AppComponent } from './components/app/app.component';

bootstrap(AppComponent, [
  TodoStoreService,
  ROUTER_PROVIDERS,
  { provide: 'AUTHOR', useValue: 'Soós Gábor' }
]);
