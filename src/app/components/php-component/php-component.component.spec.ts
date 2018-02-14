import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpComponentComponent } from './php-component.component';

describe('PhpComponentComponent', () => {
  let component: PhpComponentComponent;
  let fixture: ComponentFixture<PhpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
