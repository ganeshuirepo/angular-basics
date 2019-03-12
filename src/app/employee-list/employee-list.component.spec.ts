import { JsonDataService } from './../json-data.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ EmployeeListComponent, FormGroup ],
      providers: [JsonDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', inject([JsonDataService], (empService: JsonDataService) => {
  //   expect(component).toBeTruthy();
  // }));
});
