import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { WebrtcComponent } from './webrtc/webrtc.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [   HeaderComponent, 
                    LandingComponent, WebrtcComponent, AboutusComponent, ContactusComponent
                ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    CoreModule,
    NgbModule,
    FormsModule
  ],
  exports:[HeaderComponent, 
    LandingComponent]
})
export class LayoutsModule { }
