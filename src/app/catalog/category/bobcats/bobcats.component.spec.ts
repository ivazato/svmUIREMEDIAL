import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobcatsComponent } from './bobcats.component';

describe('BobcatsComponent', () => {
  let component: BobcatsComponent;
  let fixture: ComponentFixture<BobcatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobcatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobcatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
