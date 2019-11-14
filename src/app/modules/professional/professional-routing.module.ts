import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { ProfessionalCompletedAppointmentsComponent } from './professional-completed-appointments/professional-completed-appointments.component';
import { ProfessionalPendingAppointmentsComponent } from './professional-pending-appointments/professional-pending-appointments.component';
import { ProfessionalPaymentsComponent } from './professional-payments/professional-payments.component';
import { ProfessionalProfileComponent } from './professional-profile/professional-profile.component';
import { ProfessionalSidebarComponent } from './professional-sidebar/professional-sidebar.component';

const routes: Routes = [
  {
    path:'',
    component:ProfessionalDashboardComponent
  },
  {
    path:'professional_completed_appointments',
    component:ProfessionalCompletedAppointmentsComponent
  },
  {
    path:'professional_pending_appointments',
    component:ProfessionalPendingAppointmentsComponent
  },
  {
    path:'professional_pay',
    component:ProfessionalPaymentsComponent
  },
  {
    path:'professional_profile',
    component:ProfessionalProfileComponent
  },
  {
    path:'professional_sidebar',
    component:ProfessionalSidebarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule { }
