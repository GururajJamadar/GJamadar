import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import  { LandingComponent } from './landing/landing.component'; 
import { WebrtcComponent } from './webrtc/webrtc.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
	{
		path:'',
		component:LandingComponent
	},
	{
		path:'webrtc',
		component:WebrtcComponent
	},
	{
		path:'aboutus',
		component:AboutusComponent
	},
	{
		path:'contactus',
		component:ContactusComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
