import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ToFileNamePipe } from '../../../../shared/to-filename.pipe';
import { CityVm } from '../../viewmodels/city.viewmodel';
import { CityCardAvatarComponent } from '../city-card-avatar/city-card-avatar.component';
import { CityCardImageComponent } from '../city-card-image/city-card-image.component';

@Component({
  selector: 'app-city-card-header',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ToFileNamePipe,
    CityCardImageComponent,
    CityCardAvatarComponent,
  ],
  templateUrl: './city-card-header.component.html',
  styleUrl: './city-card-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardHeaderComponent {
  @Input({ required: true }) city: CityVm | undefined = undefined;
}
