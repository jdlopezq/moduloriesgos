import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabladatosComponent } from './tabladatos.component';

describe('TabladatosComponent', () => {
  let component: TabladatosComponent;
  let fixture: ComponentFixture<TabladatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabladatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabladatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
