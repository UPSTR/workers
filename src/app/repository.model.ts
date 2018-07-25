import {Worker} from './worker.model';
import {SimpleDataSource} from './datasource.model';
import {Injectable} from '@angular/core';

@Injectable()
export class Model {
  private dataSource: SimpleDataSource;
  private workers: Worker[];
  private locator = (p: Worker, id: number) => p.id === id;

  constructor() {
    this.dataSource = new SimpleDataSource();
    this.workers = new Array<Worker>();
    this.dataSource.getData().forEach(p => this.workers.push(p));
  }

  getWorkers(): Worker[] {
    return this.workers;
  }

  getWorker(id: number): Worker {
    return this.workers.find(p => this.locator(p, id));
  }

  saveWorker(worker: Worker) {
    if (worker.id === 0 || worker.id == null) {
      worker.id = this.generateID();
      this.workers.push(worker);
    } else {
      const index = this.workers
        .findIndex(p => this.locator(p, worker.id));
      this.workers.splice(index, 1, worker);
    }
  }
  editWorker(worker: Worker) {
    if (worker.id === 0 || worker.id == null) {
      worker.id = this.generateID();
      this.workers.push(worker);
    } else {
      const index = this.workers
        .findIndex(p => this.locator(p, worker.id));
      this.workers.splice(index, 1, worker);
    }
  }

  deleteWorker(id: number) {
    const index = this.workers.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.workers.splice(index, 1);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getWorker(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}

