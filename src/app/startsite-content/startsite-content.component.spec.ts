import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsiteContentComponent } from './startsite-content.component';

describe('StartsiteContentComponent', () => {
  let component: StartsiteContentComponent;
  let fixture: ComponentFixture<StartsiteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartsiteContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartsiteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
