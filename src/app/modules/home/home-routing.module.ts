import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicsHomeComponent } from './academics-home/academics-home.component';
import { AstroHomeComponent } from './astro-home/astro-home.component';
import { CookingHomeComponent } from './cooking-home/cooking-home.component';
import { SportsHomeComponent } from './sports-home/sports-home.component';
import { LifestyleHomeComponent } from './lifestyle-home/lifestyle-home.component';

const routes: Routes = [
    {
		path:'astro',
		component:AstroHomeComponent
	},
	{
		path:'academic',
		component:AcademicsHomeComponent
	},
	{
		path:'cooking',
		component:CookingHomeComponent
	},
	{
		path:'lifestyle',
		component:LifestyleHomeComponent
	},
	{
		path:'sports',
		component:SportsHomeComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
