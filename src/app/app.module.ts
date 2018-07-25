import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoyoutModule} from './modules/loyout/loyout.module';
import {WorkersListModule} from './modules/workers-list/workers-list.module';
import {AppRoutingModule} from './appRoute';
import {Model} from './repository.model';
import {SimpleDataSource} from './dataSource.model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoyoutModule,
    WorkersListModule,

  ],
  providers: [Model, SimpleDataSource],
  bootstrap: [AppComponent]
})
export class AppModule {
}
