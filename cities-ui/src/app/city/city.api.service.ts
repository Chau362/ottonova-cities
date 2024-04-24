import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CityDto } from './dto/city.dto';

/**
 * API Service for the sole purpose of consuming the REST API
 */
@Injectable({
  providedIn: 'root',
})
export class CityApiService {
  host = 'http://localhost:3000';

  private readonly http = inject(HttpClient);

  getCities$() {
    return this.http.get<CityDto[]>(`${this.host}/cities`);
  }
}
