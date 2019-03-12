import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularhooksComponent } from './angularhooks.component';

describe('AngularhooksComponent', () => {
  let component: AngularhooksComponent;
  let fixture: ComponentFixture<AngularhooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularhooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularhooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
