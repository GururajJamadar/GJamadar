import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { DemoMaterialModule } from '../../core/material-module';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeRoutingModule } from './home-routing.module';
import { AcademicsHomeComponent } from './academics-home/academics-home.component';
import { AstroHomeComponent } from './astro-home/astro-home.component';
import { CookingHomeComponent } from './cooking-home/cooking-home.component';
import { SportsHomeComponent } from './sports-home/sports-home.component';
import { LifestyleHomeComponent } from './lifestyle-home/lifestyle-home.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import {MatOptionModule,MatSelectModule} from '@angular/material'
@NgModule({
  declarations: [AcademicsHomeComponent, AstroHomeComponent, 
  				CookingHomeComponent, SportsHomeComponent, LifestyleHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    DemoMaterialModule,
    LayoutsModule,
    MatCheckboxModule,
    NgbModule,
    LayoutsModule,
    FormsModule,
    MatOptionModule,MatSelectModule,
  


  ]
})
export class HomeModule { }
