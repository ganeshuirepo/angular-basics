import { TestBed } from '@angular/core/testing';

import { JsonDataService } from './json-data.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('JsonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
      providers: [JsonDataService]
  }));

  it('should be created', () => {
    const service: JsonDataService = TestBed.get(JsonDataService);
    expect(service).toBeTruthy();
  });
});

describe('getEmployee', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
      providers: [JsonDataService]
  }));
  it('should return employee data', () => {
    const service: JsonDataService = TestBed.get(JsonDataService);
    const empResponse = [
      {
        "id": 124,
        "name": "Rama",
        "email": "rama@gmail.com",
        "tel": 9505101188
      },
      {
        "id": 125,
        "name": "Vishnu",
        "email": "Vishnu@gmail.com",
        "tel": 9505101188
      },
      {
        "id": 126,
        "name": "Surya",
        "email": "Surya@gmail.com",
        "tel": 9505101188
      },
      {
        "id": 127,
        "name": "Shani",
        "email": "Shani@gmail.com",
        "tel": 9505101188
      },
      {
        "id": 128,
        "name": "Shiva",
        "email": "Shiva@gmail.com",
        "tel": 9505101188
      },
      {
        "id": 129,
        "name": "Krishna",
        "email": "Krishna@gmail.com",
        "tel": 9505101188
      }
    ];
    let response;
    spyOn(service, 'getEmployee').and.returnValue(of(empResponse));
    service.getEmployee().subscribe(res => {
      response = res;
    });
    expect(response).toEqual(empResponse);
  });
});
