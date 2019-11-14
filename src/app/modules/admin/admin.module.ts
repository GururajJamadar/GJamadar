import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageProfessionalsComponent } from './manage-professionals/manage-professionals.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';
import { ManageProfessionalPaymentsComponent } from './manage-professional-payments/manage-professional-payments.component';
import { ManageUsersPaymentsComponent } from './manage-users-payments/manage-users-payments.component';
import { CoreModule } from '../../core/core.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { MatDatepickerModule, MatSortModule, MatPaginatorModule, MatRippleModule,MatDialogModule,MatToolbarModule,MatTableModule, MatOptionModule, MatButtonModule, MatSelectModule, MatNativeDateModule,MatFormFieldModule,MatInputModule,MatIconModule,MatRadioModule } from '@angular/material';
import { DisapprovedprofessionalComponent } from './disapprovedprofessional/disapprovedprofessional.component';
import { RegisterprofessionalsComponent } from './registerprofessionals/registerprofessionals.component';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AdminSidbarComponent } from './admin-sidbar/admin-sidbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AdminDashboardComponent, ManageProfessionalsComponent, 
  ManageUsersComponent, ManageAppointmentsComponent, AdminPaymentsComponent,
   ManageProfessionalPaymentsComponent, ManageUsersPaymentsComponent, 
   DisapprovedprofessionalComponent, RegisterprofessionalsComponent, AdminSidbarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    LayoutsModule,
    MatDatepickerModule,
    MatSortModule,
    MatPaginatorModule,
    MatRippleModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule, 
    MatOptionModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
