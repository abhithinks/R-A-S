import { TestBed } from '@angular/core/testing';

import { ManagerlistService } from './managerlist.service';

describe('ManagerlistService', () => {
  let service: ManagerlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
