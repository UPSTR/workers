import { OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Worker} from '../../../worker.model';
import {Model} from '../../../repository.model';

export abstract class FormComponent implements OnInit {
  workerForm: FormGroup;
  worker: Worker;
  currentId: any;
  constructor(protected router: Router,
              protected fb: FormBuilder) {}

  async ngOnInit() {
    this.worker = await this.getWorker();
    this.createForm();
  }

  createForm() {
    this.workerForm = this.fb.group({
      id: [this.worker.id],
      firstName: [this.worker.firstName, [Validators.required]],
      lastName: [this.worker.lastName, Validators.required],
      middleName: [this.worker.middleName],
      position: [this.worker.position, Validators.required],
      subdivision: [this.worker.subdivision, Validators.required],
      email: [this.worker.email, Validators.required]
    });
  }

  cancelModal(event) {
    event.stopPropagation();
    this.router.navigate(['']);
  }

  async onSubmit() {
    if (this.workerForm.valid) {
      try {
        this.sendSaveRequest();
        this.router.navigate(['']);
      } catch (e) {
        console.log(e);
      }
    } else {
      this.validateAllFormFields(this.workerForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  protected abstract sendSaveRequest();

  protected abstract getWorker();

}
