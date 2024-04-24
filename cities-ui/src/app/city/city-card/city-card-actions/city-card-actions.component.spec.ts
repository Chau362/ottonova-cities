import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardActionsComponent } from './city-card-actions.component';

describe('CityCardActionsComponent', () => {
  let component: CityCardActionsComponent;
  let fixture: ComponentFixture<CityCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCardActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
