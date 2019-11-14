import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe'; 
// import { DatePipe } from '@angular/common';
import { DemoMaterialModule } from '../../core/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCompletedAppointmentsComponent } from './user-completed-appointments/user-completed-appointments.component';
import { UserPendingAppointmentsComponent } from './user-pending-appointments/user-pending-appointments.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { CoreModule } from '../../core/core.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { FormsModule } from '@angular/forms';
import { BookingappoinmentComponent } from './bookingappoinment/bookingappoinment.component';
@NgModule({
  declarations: [UserDashboardComponent, UserCompletedAppointmentsComponent, UserPendingAppointmentsComponent, UserProfileComponent, UserPaymentsComponent, UserSidebarComponent, BookingappoinmentComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    LayoutsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgbModule,
    DemoMaterialModule,
    FormsModule,
    NgxPaginationModule
   
  ]
})
export class UserModule { }
