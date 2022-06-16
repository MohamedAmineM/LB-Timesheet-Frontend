import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemJobTitleComponent } from './item-job-title.component';

describe('ItemJobTitleComponent', () => {
  let component: ItemJobTitleComponent;
  let fixture: ComponentFixture<ItemJobTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemJobTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemJobTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
