import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CityVm } from '../../viewmodels/city.viewmodel';
import { MatDialog } from '@angular/material/dialog';
import { CityCardDetailsDialogComponent } from '../city-card-details-dialog/city-card-details-dialog.component';

@Component({
  selector: 'app-city-card-actions',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './city-card-actions.component.html',
  styleUrl: './city-card-actions.component.scss',
})
export class CityCardActionsComponent {
  private readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open<CityCardDetailsDialogComponent>(
      CityCardDetailsDialogComponent,
      { data: this.city }
    );
  }
  @Input({ required: true }) city: CityVm | undefined = undefined;
}
