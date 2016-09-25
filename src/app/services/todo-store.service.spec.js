import { TestBed, inject } from '@angular/core/testing';

import { TodoStoreService } from './todo-store.service';

describe('TodoStoreService', function() {
  let subject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoStoreService]
    });
  });

  beforeEach(inject([TodoStoreService], (storage) => {
    subject = storage;
  }));

  it('should persist todos to localStorage', function() {
    spyOn(localStorage, 'setItem');

    subject.persist();

    expect(localStorage.setItem).toHaveBeenCalledWith('angular2-todos', '[]');
  });
});
