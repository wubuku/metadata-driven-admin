import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], fn: (item: any) => boolean): any {
    if (!items || !fn) {
      return items;
    }
    return items.filter(item => fn(item));
  }
}
