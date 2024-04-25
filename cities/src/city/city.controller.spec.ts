import { Test, TestingModule } from '@nestjs/testing';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityDto } from './dto/city.dto';

describe('CityController', () => {
  let controller: CityController;
  let service: CityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityController],
      providers: [
        {
          provide: CityService,
          useValue: {
            getCityDtos: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CityController>(CityController);
    service = module.get<CityService>(CityService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of city DTOs', () => {
    const expectedDtos: CityDto[] = [
      {
        name: 'Sydney',
        name_native: 'Sydney',
        country: 'Australia',
        continent: 'Australia',
        latitude: '-33.865143',
        longitude: '151.209900',
        population: 5312000,
        founded: 1788,
        landmarks: [
          'Sydney Opera House',
          'Sydney Harbour Bridge',
          'Queen Victoria Building',
        ],
      },
    ];
    jest.spyOn(service, 'getCityDtos').mockImplementation(() => expectedDtos);

    expect(controller.findAll()).toBe(expectedDtos);
  });
});
