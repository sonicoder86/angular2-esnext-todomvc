import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { TodoStoreService } from './services/todo-store.service';
import { AppComponent } from './components/app/app.component';

bootstrap(AppComponent, [
  TodoStoreService,
  ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]);
