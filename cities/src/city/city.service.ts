import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { CityDto } from 'src/city/dto/city.dto';
import { City } from 'src/city/entities/city';

@Injectable()
export class CityService {
  private cities: City[];
  private cityDtos: CityDto[];

  constructor() {
    const data = JSON.parse(fs.readFileSync('cities.json', 'utf8'));
    this.cities = data.cities;
    this.cityDtos = this.mapCitiesToCityDtos(this.cities);
  }

  getCities(): City[] {
    return this.cities;
  }

  getCityDtos(): CityDto[] {
    return this.cityDtos;
  }

  private mapCitiesToCityDtos(cities: City[]): CityDto[] {
    return cities.map(city => {
      const cityDto: CityDto = {
        name: city.name,
        name_native: city.name_native,
        country: city.country,
        continent: city.continent,
        latitude: city.latitude,
        longitude: city.longitude,
        population: parseInt(city.population),
        founded: parseInt(city.founded),
        landmarks: city.landmarks,
      };
      return cityDto;
    });
  }
}
