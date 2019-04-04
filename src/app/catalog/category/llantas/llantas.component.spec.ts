import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlantasComponent } from './llantas.component';

describe('LlantasComponent', () => {
  let component: LlantasComponent;
  let fixture: ComponentFixture<LlantasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
