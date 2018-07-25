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

  searchRequest: any = {
    filter: '',
    sortParamDto: {
      fieldName: 'firstName',
      isDesc: false
    }
  };

  public searchString: string;

  constructor(private router: Router, private model: Model) {
    router.events.subscribe(param => {
      this.workersList = this.model.getWorkers();
    });
  }

  ngOnInit() {

  }

  changeSort($event) {
    this.searchRequest.sortParamDto.fieldName = $event.fieldName;
    this.searchRequest.sortParamDto.isDesc = $event.isDesc;
    this.workersList = this.model.getWorkers();
  }

  editWorker(id: number) {
    this.router.navigate([{ outlets: { popupUpdate: `${id}` }}]);
  }
  deleteItem(id: number) {
    this.model.deleteWorker(id);
  }

}
