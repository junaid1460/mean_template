import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';


import {HomeComponent} from './components/home.component';
import {convosComponent} from './components/convos.component';
import {SubmitOnEnterDirective} from './directives/submitonenter.dir'

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent ,SubmitOnEnterDirective,convosComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
