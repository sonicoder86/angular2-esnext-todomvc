'use strict';

describe('app', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('Angular 2 TodoMVC');
  });

  it('shows todos header', () => {
    expect(element(by.tagName('h1')).getText()).toEqual('todos');
  });
});
