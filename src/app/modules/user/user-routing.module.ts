import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCompletedAppointmentsComponent } from './user-completed-appointments/user-completed-appointments.component';
import { UserPendingAppointmentsComponent } from './user-pending-appointments/user-pending-appointments.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { BookingappoinmentComponent } from './bookingappoinment/bookingappoinment.component';

const routes: Routes = [
  {
    path:'',
    component:UserDashboardComponent
  },
  {
    path:'bookingappoinment',
    component:BookingappoinmentComponent
  },
  {
    path:'user_completed_appointments',
    component:UserCompletedAppointmentsComponent
  },
  {
    path:'user_pending_appointments',
    component:UserPendingAppointmentsComponent
  },
  {
    path:'user_profile',
    component:UserProfileComponent
  },
  {
    path:'user_pay',
    component:UserPaymentsComponent
  },
  {
    path:'user_sidebar',
    component:UserSidebarComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
