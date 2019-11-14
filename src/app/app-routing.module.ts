import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:'./modules/admin/admin.module#AdminModule'
  },
  {
    path:'professional',
    loadChildren:'./modules/professional/professional.module#ProfessionalModule'
  },
  {
    path:'user',
    loadChildren:'./modules/user/user.module#UserModule'
  },
  {
    path:'registration',
    loadChildren:'./modules/registration/registration.module#RegistrationModule'
  },
  {
    path:'home',
    loadChildren:'./modules/home/home.module#HomeModule'
  },
  {
    path:'',
    loadChildren:'./layouts/layouts.module#LayoutsModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
// import {FormBuilder,FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
// import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
// import { ApplicationUrls } from '../../../core/models/applicationUrls';
// import { Router } from '@angular/router';
// declare var $;