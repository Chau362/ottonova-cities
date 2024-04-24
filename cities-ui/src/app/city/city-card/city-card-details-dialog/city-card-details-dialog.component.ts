import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { CityVm } from '../../viewmodels/city.viewmodel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-card-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent],
  templateUrl: './city-card-details-dialog.component.html',
  styleUrl: './city-card-details-dialog.component.scss',
})
export class CityCardDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public city: CityVm) {}
}
