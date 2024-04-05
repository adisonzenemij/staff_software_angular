import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WoExternalComponent } from './work/wo-external/wo-external.component';
import { WoTechnologyComponent } from './work/wo-technology/wo-technology.component';

@NgModule({
  declarations: [
    AppComponent,
    WoExternalComponent,
    WoTechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
