import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderContactComponent } from './render-contact.component';

describe('RenderContactComponent', () => {
  let component: RenderContactComponent;
  let fixture: ComponentFixture<RenderContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
