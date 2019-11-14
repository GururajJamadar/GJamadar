import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule,MatFormFieldModule,MatStepperModule,MatButtonModule,MatSelectModule,MatCheckboxModule,MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { RegistrationRoutingModule } from './registration-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CoreModule } from '../../core/core.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { AstrosignupComponent} from './astrosignup/astrosignup.component';
import { AcademicssignupComponent } from './academicssignup/academicssignup.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { CookingsignupComponent} from './cookingsignup/cookingsignup.component';
import { LifestylesignupComponent } from './lifestylesignup/lifestylesignup.component';
import { SportssignupComponent } from './sportssignup/sportssignup.component';
import { ChecklistModule } from 'angular-checklist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';



@NgModule({

  declarations: [LoginComponent, ForgotPasswordComponent,
                 ResetPasswordComponent, AstrosignupComponent,

                 AcademicssignupComponent, BankdetailsComponent, CookingsignupComponent,
                 LifestylesignupComponent,
                 SportssignupComponent, VerifyotpComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    CoreModule,
    LayoutsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ChecklistModule,
    AngularMultiSelectModule,
    NgbModule,
  ]
})

export class RegistrationModule { }

