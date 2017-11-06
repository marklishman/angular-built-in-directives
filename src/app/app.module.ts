import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { NgIfComponent } from './ng-if.component';
import { ShowAndHideComponent } from './show-and-hide.component';
import { NgSwitchComponent } from './ng-switch.component';
import { NgForComponent } from './ng-for.component';
import { NgClassComponent } from './ng-class.component';
import { NgStyleComponent } from './ng-style.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    NgIfComponent,
    ShowAndHideComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
