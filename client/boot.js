'use strict';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
import {bootstrap} from 'angular2/platform/browser';
import {ToDoList} from './app/todolist';
import {TodoStore} from './app/todostore';

bootstrap(ToDoList, [TodoStore]);
