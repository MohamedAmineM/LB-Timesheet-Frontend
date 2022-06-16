import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTeamComponent } from './render-team.component';

describe('RenderTeamComponent', () => {
  let component: RenderTeamComponent;
  let fixture: ComponentFixture<RenderTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
