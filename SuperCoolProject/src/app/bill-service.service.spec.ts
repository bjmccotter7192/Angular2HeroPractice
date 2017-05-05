import { TestBed, inject } from '@angular/core/testing';

import { BillService } from './bill-service.service';

describe('BillServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillService]
    });
  });

  it('should ...', inject([BillService], (service: BillService) => {
    expect(service).toBeTruthy();
  }));
});
