import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodoStoreService } from './services/todo-store.service';
import {
  AppComponent,
  TodoComponent
} from './components';
import { routes } from './components/todo.routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    TodoStoreService,
    { provide: 'AUTHOR', useValue: 'Soós Gábor' }
  ]
})
export class MainModule {}
