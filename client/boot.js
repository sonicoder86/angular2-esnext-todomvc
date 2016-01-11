'use strict';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {TodoLocalStore} from './app/services/store';
import {App} from './app/components/app';

if (ENVIRONMENT == 'production') {
  enableProdMode();
}
bootstrap(App, [
  TodoLocalStore,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
