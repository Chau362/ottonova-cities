import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFilename',
  standalone: true,
})
export class ToFilenamePipe implements PipeTransform {
  transform(value: string): string {
    value = value.toLowerCase();
    if (value.includes(' ')) {
      return value.split(' ').join('-');
    }
    return value;
  }
}
