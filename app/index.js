'use strict';
import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode, provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import { HashLocationStrategy, LocationStrategy } from 'angular2/platform/common';
import {TodoLocalStore} from './services/store';
import {App} from './components/app';

bootstrap(App, [
  TodoLocalStore,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
