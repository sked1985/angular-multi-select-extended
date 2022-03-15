import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialExampleModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SharedMultiComponent } from './shared-multi/shared-multi.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,   
    MaterialExampleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMatSelectSearchModule
  ],
  declarations: [ AppComponent, SharedMultiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
