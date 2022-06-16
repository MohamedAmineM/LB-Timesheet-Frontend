import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderProjectComponent } from './render-project.component';

describe('RenderProjectComponent', () => {
  let component: RenderProjectComponent;
  let fixture: ComponentFixture<RenderProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
