import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AcademicssignupComponent } from './academicssignup/academicssignup.component';
import { AstrosignupComponent } from './astrosignup/astrosignup.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { CookingsignupComponent} from './cookingsignup/cookingsignup.component';
import { LifestylesignupComponent } from './lifestylesignup/lifestylesignup.component';
import { SportssignupComponent } from './sportssignup/sportssignup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent
  },
  {
    path:'verifyotp',
    component:VerifyotpComponent
  },
  {
    path:'resetpassword',
    component:ResetPasswordComponent
  },
  {
    path:'academicssignup',
    component:AcademicssignupComponent
  },
  {
    path:'astrosignup',
    component:AstrosignupComponent
  },

  {
    path:'bankdetail',
    component:BankdetailsComponent
  },
  {
    path:'cookingsignup',
    component:CookingsignupComponent
  },
    {
    path:'lifestylesignup',
    component:LifestylesignupComponent
  },

   {
    path:'sportssignup',
    component:SportssignupComponent
  },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }

