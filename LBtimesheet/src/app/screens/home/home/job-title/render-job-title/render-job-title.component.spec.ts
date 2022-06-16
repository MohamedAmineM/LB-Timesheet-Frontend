import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderJobTitleComponent } from './render-job-title.component';

describe('RenderJobTitleComponent', () => {
  let component: RenderJobTitleComponent;
  let fixture: ComponentFixture<RenderJobTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderJobTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderJobTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
