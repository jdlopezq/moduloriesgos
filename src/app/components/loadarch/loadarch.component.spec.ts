import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadarchComponent } from './loadarch.component';

describe('LoadarchComponent', () => {
  let component: LoadarchComponent;
  let fixture: ComponentFixture<LoadarchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadarchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
