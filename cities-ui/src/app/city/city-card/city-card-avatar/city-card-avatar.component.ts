import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ToFileNamePipe } from '../../../../shared/to-filename.pipe';

@Component({
  selector: 'app-city-card-avatar',
  standalone: true,
  imports: [CommonModule, MatCardModule, ToFileNamePipe],
  templateUrl: './city-card-avatar.component.html',
  styleUrl: './city-card-avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardAvatarComponent {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) assetDirectoryName: string = 'continents';
  @Input() fileType: 'jpg' | 'svg' = 'svg';
}
