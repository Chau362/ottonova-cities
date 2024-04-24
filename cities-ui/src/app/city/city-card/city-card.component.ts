import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { CityVm } from '../viewmodels/city.viewmodel';
import { CityCardActionsComponent } from './city-card-actions/city-card-actions.component';
import { CityCardContentComponent } from './city-card-content/city-card-content.component';
import { CityCardHeaderComponent } from './city-card-header/city-card-header.component';
import { CityCardImageComponent } from './city-card-image/city-card-image.component';
import { CityCardDetailsDialogComponent } from './city-card-details-dialog/city-card-details-dialog.component';

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
  private readonly dialog = inject(MatDialog);

  @Input({ required: true }) city: CityVm | undefined = undefined;

  handleOpenDialog() {
    this.dialog.open<CityCardDetailsDialogComponent>(
      CityCardDetailsDialogComponent,
      { data: this.city }
    );
  }
}
