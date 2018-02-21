import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistuserComponent } from './registuser.component';

describe('RegistuserComponent', () => {
  let component: RegistuserComponent;
  let fixture: ComponentFixture<RegistuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
