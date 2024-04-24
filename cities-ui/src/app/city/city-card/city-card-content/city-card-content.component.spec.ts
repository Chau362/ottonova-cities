import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardContentComponent } from './city-card-content.component';

describe('CityCardContentComponent', () => {
  let component: CityCardContentComponent;
  let fixture: ComponentFixture<CityCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCardContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
