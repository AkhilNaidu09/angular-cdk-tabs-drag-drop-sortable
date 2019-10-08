import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TabsModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports:      [ BrowserModule, 
  BrowserAnimationsModule,
   TabsModule.forRoot(),
  DragDropModule,
  FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
