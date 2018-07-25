import { Pipe, PipeTransform } from '@angular/core';
import {Worker} from '../../worker.model';

@Pipe({
  name: 'myfilter',
  pure: false
})

export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: Worker): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.firstName.indexOf(filter) !== -1 ||
      item.lastName.indexOf(filter) !== -1 || item.middleName.indexOf(filter) !== -1 ||
      item.position.indexOf(filter) !== -1 || item.subdivision.indexOf(filter) !== -1 ||
      item.email.indexOf(filter) !== -1 );
  }
}
