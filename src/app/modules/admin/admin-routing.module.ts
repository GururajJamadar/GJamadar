import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageProfessionalsComponent } from './manage-professionals/manage-professionals.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';
import { ManageProfessionalPaymentsComponent } from './manage-professional-payments/manage-professional-payments.component';
import { ManageUsersPaymentsComponent } from './manage-users-payments/manage-users-payments.component';
import { DisapprovedprofessionalComponent } from './disapprovedprofessional/disapprovedprofessional.component';
import { RegisterprofessionalsComponent } from './registerprofessionals/registerprofessionals.component';
import { HeaderComponent } from '../../layouts/header/header.component';
// import { SidenavComponent } from '../../layouts/sidenav/sidenav.component';
import { AdminSidbarComponent } from './admin-sidbar/admin-sidbar.component';
const routes: Routes = [
  {
    path:'',
    component:AdminDashboardComponent,
  },
  {
    path:'manage_professionals',
    component:ManageProfessionalsComponent,
  },
  {
    path:'manage_users',
    component:ManageUsersComponent,
  },
  {
    path:'manage_appointments',
    component:ManageAppointmentsComponent,
  },
  {
    path:'admin_payments',
    component:AdminPaymentsComponent,
  },
  {
    path:'manage_professional_pay',
    component:ManageProfessionalPaymentsComponent,
  },
  {
    path:'disapproved_professional',
    component:DisapprovedprofessionalComponent,
  },
  {
    path:'manage_users_pay',
    component:ManageUsersPaymentsComponent,
  },
  {
    path:'register_professionals',
    component:RegisterprofessionalsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
