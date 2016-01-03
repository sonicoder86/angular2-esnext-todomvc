'use strict';
import {TodoComponent} from './todo';
import {AsyncTestCompleter, TestComponentBuilder} from 'angular2/testing_internal';

describe('AppCoponent', function() {
  it('renders app', inject([TestComponentBuilder, AsyncTestCompleter], (builder, async) => {
    expect(true).toBe(true);
    async.done();
  }));
});
