import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CityVm } from '../../viewmodels/city.viewmodel';
import { ToFilenamePipe } from '../../../../shared/to-filename.pipe';

@Component({
  selector: 'app-city-card-header',
  standalone: true,
  imports: [CommonModule, MatCardModule, ToFilenamePipe],
  templateUrl: './city-card-header.component.html',
  styleUrl: './city-card-header.component.scss',
})
export class CityCardHeaderComponent {
  @Input({ required: true }) city: CityVm | undefined = undefined;
}
