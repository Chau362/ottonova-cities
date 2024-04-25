import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';

/**
 * Currently all routes lead to cities as it is the only page in our application
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cities' },
  {
    path: 'cities',
    component: CityComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'cities' },
];
