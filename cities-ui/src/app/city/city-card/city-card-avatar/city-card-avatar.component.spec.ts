import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardAvatarComponent } from './city-card-avatar.component';

describe('CityCardAvatarComponent', () => {
  let component: CityCardAvatarComponent;
  let fixture: ComponentFixture<CityCardAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCardAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityCardAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
