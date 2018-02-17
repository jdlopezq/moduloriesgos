import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecvariablesComponent } from './selecvariables.component';

describe('SelecvariablesComponent', () => {
  let component: SelecvariablesComponent;
  let fixture: ComponentFixture<SelecvariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecvariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecvariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
