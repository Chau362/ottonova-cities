import { CityService } from './city.service';

describe('CityService', () => {
  let cityService: CityService;

  beforeEach(() => {
    cityService = new CityService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(cityService).toBeDefined();
  });
});
