import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Model} from '../../../../repository.model';
import {FormComponent} from '../form.component';

@Component({
  selector: 'app-update',
  templateUrl: '../form.component.html',
  styleUrls: ['../form.component.css']
})
export class UpdateComponent extends FormComponent {

  constructor(protected fb: FormBuilder,
              protected router: Router,
              protected model: Model,
              private route: ActivatedRoute) {
    super(router, fb);
  }

  protected getWorker(): any {

    this.route.params.subscribe(async params => {
      this.currentId = params['id'];
    });

    return this.model.getWorker(Number(this.currentId));
  }

  protected getSaveButtonText(): string {
    return 'Обновить';
  }

  protected sendSaveRequest(): any {
    return this.model.editWorker(this.workerForm.value);
  }

}
