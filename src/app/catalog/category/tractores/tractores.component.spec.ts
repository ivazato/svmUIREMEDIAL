import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractoresComponent } from './tractores.component';

describe('TractoresComponent', () => {
  let component: TractoresComponent;
  let fixture: ComponentFixture<TractoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TractoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TractoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
