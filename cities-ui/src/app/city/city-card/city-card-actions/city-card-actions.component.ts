import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CityVm } from '../../viewmodels/city.viewmodel';

@Component({
  selector: 'app-city-card-actions',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './city-card-actions.component.html',
  styleUrl: './city-card-actions.component.scss',
})
export class CityCardActionsComponent {
  @Input({ required: true }) city: CityVm | undefined = undefined;
  @Output() openDialogEvent = new EventEmitter<void>();
}
