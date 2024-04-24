import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cities' },
  {
    path: 'cities',
    component: CityComponent,
  },
];
