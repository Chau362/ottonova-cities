import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CityApiService } from './city.api.service';
import { CityVm } from './viewmodels/city.viewmodel';

/**
 * Additional Service in order to transform incoming data to ViewModels if necessary.
 */
@Injectable({
  providedIn: 'root',
})
export class CityService {
  private readonly apiService = inject(CityApiService);

  getCities$() {
    const cityDtos$ = this.apiService.getCities$();
    const cityVms$: Observable<CityVm[]> = cityDtos$.pipe(
      map(cityDtos =>
        cityDtos.map(cityDto => ({
          name: cityDto.name,
          name_native: cityDto.name_native,
          country: cityDto.country,
          continent: cityDto.continent,
          latitude: cityDto.latitude,
          longitude: cityDto.longitude,
          population: cityDto.population,
          founded: cityDto.founded,
          landmarks: cityDto.landmarks,
        }))
      )
    );
    return cityVms$;
  }
}
