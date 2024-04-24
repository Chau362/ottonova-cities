import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CityVm } from '../viewmodels/city.viewmodel';
import { CityCardContentComponent } from './city-card-content/city-card-content.component';
import { CityCardHeaderComponent } from './city-card-header/city-card-header.component';
import { CityCardImageComponent } from './city-card-image/city-card-image.component';
import { CityCardActionsComponent } from './city-card-actions/city-card-actions.component';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CityCardActionsComponent,
    CityCardHeaderComponent,
    CityCardImageComponent,
    CityCardContentComponent,
  ],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.scss',
})
export class CityCardComponent {
  @Input({ required: true }) city: CityVm | undefined = undefined;
}
