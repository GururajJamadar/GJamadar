import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import  {AuthenticationInterceptService} from '../app/core/Services/AuthService/authentication-intercept.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from './layouts/layouts.module';
import { DatePipe } from '@angular/common';
import{ MatDatepickerModule, MatSortModule, MatPaginatorModule, MatRippleModule,MatDialogModule,MatToolbarModule,MatTableModule, MatOptionModule, MatButtonModule, MatSelectModule, MatNativeDateModule,MatFormFieldModule,MatInputModule,MatIconModule,MatRadioModule } from '@angular/material';
import{ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatSortModule,
    MatPaginatorModule,
    MatRippleModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    // FormsModule,
    ReactiveFormsModule
   
  ],

  
  providers: [DatePipe,{provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptService,multi:true}],

  bootstrap: [AppComponent]
})
export class AppModule { }
