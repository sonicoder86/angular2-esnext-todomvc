'use strict';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {TodoLocalStore} from './app/services/store';
import {TodoApp} from './app/components/todo';

if (ENVIRONMENT == 'production') {
  enableProdMode();
}
bootstrap(TodoApp, [TodoLocalStore]);
