import { TestBed } from '@angular/core/testing';

import { ShoppingListStorageService } from './shopping-list-storage.service';

describe('ShoppingListStorageService', () => {
  let service: ShoppingListStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
