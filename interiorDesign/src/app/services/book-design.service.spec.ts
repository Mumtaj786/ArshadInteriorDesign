import { TestBed } from '@angular/core/testing';

import { BookDesignService } from './book-design.service';

describe('BookDesignService', () => {
  let service: BookDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
