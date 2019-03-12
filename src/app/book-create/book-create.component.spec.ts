import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreateComponent } from './book-create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatIconModule, MatTableModule, MatSortModule, MatProgressSpinnerModule, MatPaginatorModule, MatInputModule } from '@angular/material';
import { FormGroup, FormControl, FormGroupDirective, FormsModule, ReactiveFormsModule, FormBuilder, NgForm, Validators } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


describe('BookCreateComponent', () => {
  let component: BookCreateComponent;
  let fixture: ComponentFixture<BookCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCreateComponent],
      imports: [RouterTestingModule
       ],
       schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
