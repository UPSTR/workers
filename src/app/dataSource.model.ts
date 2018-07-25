import {Worker} from './worker.model';
import {Injectable} from '@angular/core';

@Injectable()
export class SimpleDataSource {
  private data: Worker[];

  constructor() {
    this.data = new Array<Worker>(
      new Worker(1, 'Иван', 'Иванович', 'Иванов', 'стажер', 'разработчик', 'ivan@mail.ru'),
      new Worker(2, 'Роман', 'Иванович', 'Романов', 'главный разработчик', 'раработчик', 'roman@mail.ru'),
      new Worker(3, 'Сергей', 'Сергеевич', 'Сергеев', 'тестеровщик', 'команда тестеров', 'sergey@mail.ru'),
      new Worker(4, 'Петр', 'Сергеевич', 'Петров', 'аналитик', 'CEO', 'petr@mail.ru'),
      new Worker(5, 'Александр', 'Петрович', 'Александров', 'аналитик', 'CEO', 'alex@mail.ru')
    );
  }

  getData(): Worker[] {
    return this.data;
  }

}
