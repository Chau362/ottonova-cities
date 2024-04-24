import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardDetailsDialogComponent } from './city-card-details-dialog.component';

describe('CityCardDetailsDialogComponent', () => {
  let component: CityCardDetailsDialogComponent;
  let fixture: ComponentFixture<CityCardDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCardDetailsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityCardDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
