webpackJsonp([1],{0:function(e,t,o){"use strict";var n=o(54);o(59);var i=o(97);(0,n.platformBrowserDynamic)().bootstrapModule(i.MainModule)},27:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.TodoStoreService=void 0;var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(57),a=n(u),l=o(98);t.TodoStoreService=function(){function e(){i(this,e),this.todos=[];var t=JSON.parse(a["default"].getItem("angular2-todos"))||[];this.todos=t.map(function(e){var t=new l.TodoModel(e.title);return t.completed=e.completed,t.uid=e.uid,t})}return r(e,[{key:"get",value:function(e){return this.todos.filter(function(t){return t.completed===e.completed})}},{key:"allCompleted",value:function(){return this.todos.length===this.getCompleted().length}},{key:"setAllTo",value:function(e){this.todos.forEach(function(t){return t.completed=e}),this.persist()}},{key:"removeCompleted",value:function(){this.todos=this.get({completed:!1}),this.persist()}},{key:"getRemaining",value:function(){return this.remainingTodos||(this.remainingTodos=this.get({completed:!1})),this.remainingTodos}},{key:"getCompleted",value:function(){return this.completedTodos||(this.completedTodos=this.get({completed:!0})),this.completedTodos}},{key:"toggleCompletion",value:function(e){var t=this._findByUid(e);t&&(t.completed=!t.completed,this.persist())}},{key:"remove",value:function(e){var t=this._findByUid(e);t&&(this.todos.splice(this.todos.indexOf(t),1),this.persist())}},{key:"add",value:function(e){this.todos.push(new l.TodoModel(e)),this.persist()}},{key:"persist",value:function(){this._clearCache(),a["default"].setItem("angular2-todos",JSON.stringify(this.todos))}},{key:"_findByUid",value:function(e){return this.todos.find(function(t){return t.uid==e})}},{key:"_clearCache",value:function(){this.completedTodos=null,this.remainingTodos=null}}]),e}()},55:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.TodoListComponent=void 0;var r,u,a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(9),s=o(26),c=o(27),d=o(117),f=n(d),p=t.TodoListComponent=(r=(0,l.Component)({selector:"todo-list",template:f["default"]}),r(u=function(){function e(t,o){i(this,e),this._todoStore=t,this._route=o,this._currentStatus=""}return a(e,[{key:"ngOnInit",value:function(){var e=this;this._route.params.map(function(e){return e.status}).subscribe(function(t){e._currentStatus=t})}},{key:"remove",value:function(e){this._todoStore.remove(e)}},{key:"update",value:function(){this._todoStore.persist()}},{key:"getTodos",value:function(){return"completed"==this._currentStatus?this._todoStore.getCompleted():"active"==this._currentStatus?this._todoStore.getRemaining():this._todoStore.todos}},{key:"allCompleted",value:function(){return this._todoStore.allCompleted()}},{key:"setAllTo",value:function(e){this._todoStore.setAllTo(e.checked)}}]),e}())||u);Reflect.defineMetadata("design:paramtypes",[c.TodoStoreService,s.ActivatedRoute],p)},91:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.AppComponent=void 0;var r,u,a=o(9),l=o(113),s=n(l),c=t.AppComponent=(r=(0,a.Component)({selector:"todo-app",template:s["default"]}),r(u=function d(e){i(this,d),this.author=e})||u);(0,a.Inject)("AUTHOR")(c,null,0)},92:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(91);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var i=o(93);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var r=o(94);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var u=o(95);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var a=o(55);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},93:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.TodoFooterComponent=void 0;var r,u,a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(9),s=o(26),c=o(27),d=o(114),f=n(d),p=t.TodoFooterComponent=(r=(0,l.Component)({selector:"todo-footer",template:f["default"]}),r(u=function(){function e(t,o){i(this,e),this._todoStore=t,this._route=o,this.currentStatus=""}return a(e,[{key:"ngOnInit",value:function(){var e=this;this._route.params.map(function(e){return e.status}).subscribe(function(t){e.currentStatus=t||""})}},{key:"removeCompleted",value:function(){this._todoStore.removeCompleted()}},{key:"getCount",value:function(){return this._todoStore.todos.length}},{key:"getRemainingCount",value:function(){return this._todoStore.getRemaining().length}},{key:"hasCompleted",value:function(){return this._todoStore.getCompleted().length>0}}]),e}())||u);Reflect.defineMetadata("design:paramtypes",[c.TodoStoreService,s.ActivatedRoute],p)},94:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.TodoHeaderComponent=void 0;var r,u,a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(9),s=o(27),c=o(115),d=n(c),f=t.TodoHeaderComponent=(r=(0,l.Component)({selector:"todo-header",template:d["default"]}),r(u=function(){function e(t){i(this,e),this.newTodo="",this._todoStore=t}return a(e,[{key:"addTodo",value:function(){this.newTodo.trim().length&&(this._todoStore.add(this.newTodo),this.newTodo="")}}]),e}())||u);Reflect.defineMetadata("design:paramtypes",[s.TodoStoreService],f)},95:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,o,n){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(n):void 0})}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t,o,n,i){var r={};return Object.keys(n).forEach(function(e){r[e]=n[e]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=o.slice().reverse().reduce(function(o,n){return n(e,t,o)||o},r),i&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(i):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}Object.defineProperty(t,"__esModule",{value:!0}),t.TodoItemComponent=void 0;var a,l,s,c,d,f,p,m,h,v=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),y=o(9),b=o(116),g=n(b);t.TodoItemComponent=(a=(0,y.Component)({selector:"todo-item",template:g["default"]}),l=(0,y.Input)(),s=(0,y.Output)(),c=(0,y.Output)(),a((f=function(){function e(){r(this,e),i(this,"todo",p,this),i(this,"itemModified",m,this),i(this,"itemRemoved",h,this),this.editing=!1}return v(e,[{key:"cancelEditing",value:function(){this.editing=!1}},{key:"stopEditing",value:function(e){this.todo.setTitle(e.value),this.editing=!1,0===this.todo.title.length?this.remove():this.update()}},{key:"edit",value:function(){this.editing=!0}},{key:"toggleCompletion",value:function(){this.todo.completed=!this.todo.completed,this.update()}},{key:"remove",value:function(){this.itemRemoved.next(this.todo.uid)}},{key:"update",value:function(){this.itemModified.next(this.todo.uid)}}]),e}(),p=u(f.prototype,"todo",[l],{enumerable:!0,initializer:function(){return this.todo}}),m=u(f.prototype,"itemModified",[s],{enumerable:!0,initializer:function(){return new y.EventEmitter}}),h=u(f.prototype,"itemRemoved",[c],{enumerable:!0,initializer:function(){return new y.EventEmitter}}),d=f))||d)},96:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.routes=void 0;var n=o(55);t.routes=[{path:"",component:n.TodoListComponent,pathMatch:"full"},{path:":status",component:n.TodoListComponent}]},97:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MainModule=void 0;var i,r,u=o(25),a=o(52),l=o(53),s=o(26),c=o(9),d=o(27),f=o(92),p=o(99),m=o(96);t.MainModule=(i=(0,c.NgModule)({bootstrap:[f.AppComponent],declarations:[f.AppComponent,f.TodoListComponent,f.TodoFooterComponent,f.TodoHeaderComponent,f.TodoItemComponent,p.TrimPipe],imports:[u.BrowserModule,a.FormsModule,l.HttpModule,s.RouterModule.forRoot(m.routes,{useHash:!0})],providers:[d.TodoStoreService,{provide:"AUTHOR",useValue:"Soós Gábor"}]}),i(r=function h(){n(this,h)})||r)},98:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.TodoModel=void 0;var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(58),a=n(u);t.TodoModel=function(){function e(t){i(this,e),this.completed=this.completed,this.title=this.title,this.uid=this.uid,this.uid=a.v4(),this.completed=!1,this.title=t.trim()}return r(e,[{key:"setTitle",value:function(e){this.title=e.trim()}}]),e}()},99:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(100);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},100:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.TrimPipe=void 0;var i,r,u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(9);t.TrimPipe=(i=(0,a.Pipe)({name:"trim"}),i(r=function(){function e(){n(this,e)}return u(e,[{key:"transform",value:function(e,t){return e.trim()}}]),e}())||r)},113:function(e,t){e.exports='<router-outlet></router-outlet> <footer class="info"> <p>Double-click to edit a todo</p> <p>Written by <a href="https://github.com/blacksonic">{{ author }}</a></p> </footer> '},114:function(e,t){e.exports='<footer class="footer" *ngIf="getCount()"> <span class="todo-count"><strong>{{ getRemainingCount() }}</strong> {{ getRemainingCount() == 1 ? \'item\' : \'items\' }} left</span> <ul class="filters"> <li> <a [routerLink]="[\'\']" [class.selected]="currentStatus == \'\'">All</a> </li> <li> <a [routerLink]="[\'\', \'active\']" [class.selected]="currentStatus == \'active\'">Active</a> </li> <li> <a [routerLink]="[\'\', \'completed\']" [class.selected]="currentStatus == \'completed\'">Completed</a> </li> </ul> <button class="clear-completed" *ngIf="hasCompleted()" (click)="removeCompleted()">Clear completed</button> </footer> '},115:function(e,t){e.exports='<header class="header"> <h1>Todos</h1> <input class="new-todo" placeholder="What needs to be done?" [(ngModel)]="newTodo" autofocus="" (keyup.enter)="addTodo()"> </header> '},116:function(e,t){e.exports='<li [class.completed]="todo.completed" [class.editing]="editing"> <div class="view"> <input class="toggle" type="checkbox" (click)="toggleCompletion()" [checked]="todo.completed"> <label (dblclick)="edit(todo)">{{ todo.title | trim }}</label> <button class="destroy" (click)="remove()"></button> </div> <input class="edit" *ngIf="editing" [value]="todo.title" #editedtodo (blur)="stopEditing(editedtodo)" (keyup.enter)="stopEditing(editedtodo)" (keyup.escape)="cancelEditing()"> </li> '},117:function(e,t){e.exports='<section class="todoapp"> <todo-header></todo-header> <section class="main" *ngIf="getTodos().length"> <input class="toggle-all" type="checkbox" #toggleall [checked]="allCompleted()" (click)="setAllTo(toggleall)"> <ul class="todo-list"> <todo-item *ngFor="let todo of getTodos()" [todo]="todo" (itemRemoved)="remove($event)" (itemModified)="update($event)"></todo-item> </ul> </section> <todo-footer></todo-footer> </section>'}});
//# sourceMappingURL=main.map