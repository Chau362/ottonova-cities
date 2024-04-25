import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

import { CityVm } from '../../viewmodels/city.viewmodel';

@Component({
  selector: 'app-city-card-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent],
  templateUrl: './city-card-details-dialog.component.html',
  styleUrl: './city-card-details-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public city: CityVm) {}
}
