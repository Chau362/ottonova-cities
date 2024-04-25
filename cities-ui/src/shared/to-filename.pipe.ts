import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFileName',
  standalone: true,
})
export class ToFileNamePipe implements PipeTransform {
  transform(value: string): string {
    value = value.toLowerCase();
    if (value.includes(' ')) {
      return value.split(' ').join('-');
    }
    return value;
  }
}
