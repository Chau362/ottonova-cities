import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';
import { CityVm } from './viewmodels/city.viewmodel';

/**
 * Test is currenlty only a template for additional mapping logic, as the current one does not transform anything
 */
describe('CityService', () => {
  let cityService: CityService;
  let mockCityService: jasmine.SpyObj<CityService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CityService', ['getCities$']);
    TestBed.configureTestingModule({
      providers: [{ provide: CityService, useValue: spy }],
    });
    mockCityService = TestBed.inject(
      CityService
    ) as jasmine.SpyObj<CityService>;
    cityService = TestBed.inject(CityService);
  });

  it('should transform cityDtos to CityVm array', () => {
    const cityDtos: CityDto[] = [
      {
        name: 'City 1',
        name_native: 'City 1 Native',
        country: 'Country 1',
        continent: 'Continent 1',
        latitude: '123.456',
        longitude: '789.012',
        population: 1000000,
        founded: 1999,
        landmarks: ['Landmark 1', 'Landmark 2'],
      },
    ];

    const expectedCityVms: CityVm[] = [
      {
        name: 'City 1',
        name_native: 'City 1 Native',
        country: 'Country 1',
        continent: 'Continent 1',
        latitude: '123.456',
        longitude: '789.012',
        population: 1000000,
        founded: 1999,
        landmarks: ['Landmark 1', 'Landmark 2'],
      },
    ];

    mockCityService.getCities$.and.returnValue(of(cityDtos));

    cityService.getCities$().subscribe(result => {
      expect(result).toEqual(expectedCityVms);
    });
  });
});
