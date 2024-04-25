import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ToFileNamePipe } from '../../../../shared/to-filename.pipe';

@Component({
  selector: 'app-city-card-image',
  standalone: true,
  imports: [CommonModule, MatCardModule, ToFileNamePipe],
  templateUrl: './city-card-image.component.html',
  styleUrl: './city-card-image.component.scss',
})
export class CityCardImageComponent {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) assetDirectoryName: string = 'cities';
  @Input() fileType: 'jpg' | 'svg' = 'jpg';
}
