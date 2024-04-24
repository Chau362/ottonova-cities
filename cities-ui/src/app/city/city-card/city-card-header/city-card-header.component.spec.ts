import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardHeaderComponent } from './city-card-header.component';

describe('CityCardHeaderComponent', () => {
  let component: CityCardHeaderComponent;
  let fixture: ComponentFixture<CityCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
