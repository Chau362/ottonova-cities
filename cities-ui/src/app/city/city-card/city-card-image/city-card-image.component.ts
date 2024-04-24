import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ToFilenamePipe } from '../../../../shared/to-filename.pipe';

@Component({
  selector: 'app-city-card-image',
  standalone: true,
  imports: [CommonModule, MatCardModule, ToFilenamePipe],
  templateUrl: './city-card-image.component.html',
  styleUrl: './city-card-image.component.scss',
})
export class CityCardImageComponent {
  @Input({ required: true }) name: string = '';
}
