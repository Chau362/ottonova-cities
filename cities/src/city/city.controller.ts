import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { CityService } from './city.service';
import { HttpExceptionFilter } from 'src/error/http.exception.filter';
import { CityDto } from 'src/city/dto/city.dto';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter())
  findAll(): CityDto[] {
    try {
      return this.cityService.getCityDtos();
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
