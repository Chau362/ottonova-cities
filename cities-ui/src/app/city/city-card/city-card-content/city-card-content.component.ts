import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-city-card-content',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './city-card-content.component.html',
  styleUrl: './city-card-content.component.scss',
})
export class CityCardContentComponent {
  @Input({ required: true }) landmarks: string[] = [];
}
