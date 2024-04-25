import { Injectable, OnModuleInit } from '@nestjs/common';
import { CityDto } from 'src/city/dto/city.dto';
import { City } from 'src/city/entities/city';
import * as fs from 'fs';

@Injectable()
export class CityService implements OnModuleInit {
  private cities: City[];
  private cityDtos: CityDto[];

  onModuleInit() {
    this.initializeCities();
  }

  initializeCities() {
    try {
      const data = JSON.parse(fs.readFileSync('cities.json', 'utf8'));
      this.cities = data.cities;
      this.cityDtos = this.mapCitiesToCityDtos(this.cities);
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        throw new Error(
          `Error reading file: "${error.path}". Does the file exists?`
        );
      }

      if (error.code === 'EACCES') {
        throw new Error(
          `Error accessing file: "${error.path}". Do you have the necessary rights to access the file?`
        );
      }

      throw new Error(`Unknown Error: Code ${error.code}`);
    }
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
