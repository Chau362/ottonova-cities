import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardImageComponent } from './city-card-image.component';

describe('CityCardImageComponent', () => {
  let component: CityCardImageComponent;
  let fixture: ComponentFixture<CityCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCardImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CityCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the alt text when no image source is found', () => {
    component.name = 'unknown City';
    fixture.detectChanges();
    const imgElement: HTMLImageElement =
      fixture.nativeElement.querySelector('img');
    expect(imgElement.alt).toBe(`Photo of ${component.name}`);
  });
});
