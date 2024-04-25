import { Controller, Get } from '@nestjs/common';
import { CityDto } from 'src/city/dto/city.dto';
import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  findAll(): CityDto[] {
    return this.cityService.getCityDtos();
  }
}
