import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderProfileComponent } from './render-profile.component';

describe('RenderProfileComponent', () => {
  let component: RenderProfileComponent;
  let fixture: ComponentFixture<RenderProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
