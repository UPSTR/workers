import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {AddWorkerComponent} from '../../common/add-worker/add-worker.component';
import {AppRoutingModule} from '../../appRoute';
import {UpdateWorrkerComponent} from '../../common/update-worrker/update-worrker.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent, AddWorkerComponent, UpdateWorrkerComponent],
  declarations: [HeaderComponent, AddWorkerComponent, UpdateWorrkerComponent]
})
export class LoyoutModule {
}
