import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './modules/workers-list/list/list.component';

import {NgModule} from '@angular/core';
import {CreateComponent} from './modules/workers-list/form/create/create.component';
import {UpdateComponent} from './modules/workers-list/form/update/update.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: ListComponent},
  {path: 'create', component: CreateComponent, outlet: 'popup' },
  {path: ':id', component: UpdateComponent, outlet: 'popupUpdate' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
