/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GorestService } from './gorest.service';

describe('Service: Gorest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GorestService],
    });
  });

  it('should ...', inject([GorestService], (service: GorestService) => {
    expect(service).toBeTruthy();
  }));
});
