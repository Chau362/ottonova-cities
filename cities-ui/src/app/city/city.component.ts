import { CommonModule } from '@angular/common';
import { Component, OnInit, TrackByFunction, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CityService } from './city.service';
import { CityVm } from './viewmodels/city.viewmodel';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent {
  private readonly cityService = inject(CityService);
  cities$: Observable<CityVm[] | undefined> = this.cityService.getCities$();
  trackByName: TrackByFunction<CityVm> = (_, item) => item.name;
}
