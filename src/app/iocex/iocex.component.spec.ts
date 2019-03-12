import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IocexComponent } from './iocex.component';
import { HomeComponent } from '../home/home.component';

describe('IocexComponent', () => {
  let component: IocexComponent;
  let fixture: ComponentFixture<IocexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IocexComponent,
      HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IocexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
