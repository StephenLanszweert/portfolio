import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnterscreenComponent } from './components/enterscreen/enterscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterscreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
