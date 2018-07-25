import {Pipe, PipeTransform} from '@angular/core';
import {Worker} from '../../worker.model';

@Pipe({
  name: 'sortingWorkers'
})
export class SortingWorkersPipe implements PipeTransform {

  transform(companies: Worker[], path: string[], order: number): Worker[] {

    // Check if is not null
    if (!companies || !path || !order) {
      return companies;
    }

    return companies.sort((a: Worker, b: Worker) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      });

      // Order * (-1): We change our order
      return a > b ? order : order * (-1);
    });
  }

}
