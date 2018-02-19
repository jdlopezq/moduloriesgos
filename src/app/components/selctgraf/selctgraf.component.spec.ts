import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctgrafComponent } from './selctgraf.component';

describe('SelctgrafComponent', () => {
  let component: SelctgrafComponent;
  let fixture: ComponentFixture<SelctgrafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelctgrafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelctgrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
