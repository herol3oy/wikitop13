import { TestBed } from '@angular/core/testing';

import { WikitopService } from './wikitop.service';

describe('WikitopService', () => {
  let service: WikitopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikitopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
