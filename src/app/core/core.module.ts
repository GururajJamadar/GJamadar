import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestserviceService } from './Services/RestService/restservice.service';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RestserviceService
  ]
})
export class CoreModule { }
