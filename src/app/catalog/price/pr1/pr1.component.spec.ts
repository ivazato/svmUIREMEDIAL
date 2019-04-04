import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pr1Component } from './pr1.component';

describe('Pr1Component', () => {
  let component: Pr1Component;
  let fixture: ComponentFixture<Pr1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pr1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
