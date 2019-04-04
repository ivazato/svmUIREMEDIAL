import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcavadorasComponent } from './excavadoras.component';

describe('ExcavadorasComponent', () => {
  let component: ExcavadorasComponent;
  let fixture: ComponentFixture<ExcavadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcavadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcavadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
