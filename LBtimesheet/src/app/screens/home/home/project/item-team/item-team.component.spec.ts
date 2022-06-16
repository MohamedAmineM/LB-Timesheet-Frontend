import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTeamComponent } from './item-team.component';

describe('ItemTeamComponent', () => {
  let component: ItemTeamComponent;
  let fixture: ComponentFixture<ItemTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
