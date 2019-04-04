import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pr3Component } from './pr3.component';

describe('Pr3Component', () => {
  let component: Pr3Component;
  let fixture: ComponentFixture<Pr3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pr3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
