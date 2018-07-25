import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Model} from '../../../../repository.model';
import {FormComponent} from '../form.component';

@Component({
  selector: 'app-create',
  templateUrl: '../form.component.html',
  styleUrls: ['../form.component.css']
})
export class CreateComponent extends FormComponent {

  constructor(protected fb: FormBuilder,
              protected router: Router,
              protected model: Model) {
    super(router, fb);
  }

  protected getWorker(): any {
    return Promise.resolve({} as Worker);
  }

  protected getSaveButtonText(): string {
    return 'Создать';
  }

  protected sendSaveRequest(): any {
    return this.model.saveWorker(this.workerForm.value);
  }

}
