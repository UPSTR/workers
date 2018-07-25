import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {LoyoutModule} from '../loyout/loyout.module';
import {AppRoutingModule} from '../../appRoute';
import { CreateComponent } from './form/create/create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateComponent} from './form/update/update.component';
import {UpdateWorrkerComponent} from '../../common/update-worrker/update-worrker.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {SimpleDataSource} from '../../dataSource.model';
import {Model} from '../../repository.model';
import {MyFilterPipe} from '../../common/filter/filter';

const router: Routes = [{path: 'update', component: UpdateWorrkerComponent, outlet: 'popup' }];

@NgModule({
  imports: [
    CommonModule,
    LoyoutModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
  ],
  declarations: [ListComponent, CreateComponent, UpdateComponent, MyFilterPipe],
  exports: [ListComponent, CreateComponent, UpdateComponent],
  providers: [Model, SimpleDataSource],
})
export class WorkersListModule { }
