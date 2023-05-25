import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsEmailComponent } from './icons-email.component';

describe('IconsEmailComponent', () => {
  let component: IconsEmailComponent;
  let fixture: ComponentFixture<IconsEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
