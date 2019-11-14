import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../../core/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule,MatFormFieldModule,MatStepperModule,MatButtonModule,MatSelectModule,MatCheckboxModule,MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { ProfessionalCompletedAppointmentsComponent } from './professional-completed-appointments/professional-completed-appointments.component';
import { ProfessionalPendingAppointmentsComponent } from './professional-pending-appointments/professional-pending-appointments.component';
import { ProfessionalPaymentsComponent } from './professional-payments/professional-payments.component';
import { ProfessionalProfileComponent } from './professional-profile/professional-profile.component';
import { CoreModule } from '../../core/core.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChecklistModule } from 'angular-checklist';
import { ProfessionalSidebarComponent } from './professional-sidebar/professional-sidebar.component';


@NgModule({
  declarations: [ProfessionalDashboardComponent, ProfessionalCompletedAppointmentsComponent, ProfessionalPendingAppointmentsComponent, ProfessionalPaymentsComponent, ProfessionalProfileComponent, FilterPipe, ProfessionalSidebarComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    CoreModule,
    LayoutsModule,
    DemoMaterialModule,
    FormsModule,
    NgbModule,
    ChecklistModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
     MatNativeDateModule
  ]
})
export class ProfessionalModule { }
