import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCalendarComponent } from './render-calendar.component';

describe('RenderCalendarComponent', () => {
  let component: RenderCalendarComponent;
  let fixture: ComponentFixture<RenderCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
