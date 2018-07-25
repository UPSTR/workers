import { Component, OnInit } from '@angular/core';
import {Model} from '../../../repository.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  workersList: any[];
  path: string[] = ['id'];
  order = 1;

  public searchString: string;

  constructor(private router: Router, private model: Model) {
    router.events.subscribe(param => {
      this.workersList = this.model.getWorkers();
    });
  }

  ngOnInit() {

  }

  sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }

  editWorker(id: number) {
    this.router.navigate([{ outlets: { popupUpdate: `${id}` }}]);
  }
  deleteItem(id: number) {
    this.model.deleteWorker(id);
  }

}
