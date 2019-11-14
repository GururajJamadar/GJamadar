import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { RegistrationValidator } from '../../registration/register.validator';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
declare var $
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  @ViewChild('Resetpopup',{static:false}) Resetpopup: ElementRef;
  
  submitted = false;
  private mobile = localStorage.getItem('mobile');
  error_message: any;
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  get f() 
  { 
  	return this.passwordFormGroup.controls; 
  }
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private resetService: RestserviceService) {
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    }, {
        validator: [RegistrationValidator.validate.bind(this)]
      });
    this.registrationFormGroup = this.formBuilder.group({

      passwordFormGroup: this.passwordFormGroup
    });
  }

  ngOnInit() {
  }
  onClickRegister(registrationFormGroup: any): void {
    this.submitted = true;
    if ((registrationFormGroup.value.password.length == 0 || registrationFormGroup.value.password == null || registrationFormGroup.value.password === "" || registrationFormGroup.value.password == undefined) || (registrationFormGroup.value.repeatPassword.length == 0 || registrationFormGroup.value.repeatPassword == null || registrationFormGroup.value.repeatPassword === "" || registrationFormGroup.value.repeatPassword == undefined)) {

    }

    else {
    	let url : string = ApplicationUrls.RESETPASSWORD;
      let data = { 'password': registrationFormGroup.value.password, 'repeatPassword': registrationFormGroup.value.repeatPassword, 'mobile_number': this.mobile }
      this.resetService.Post(url,data).subscribe(data => {

        if (data == "Password has been successfully reset") {

          localStorage.removeItem('mobile');
          $(this.Resetpopup.nativeElement).modal('show');
        }
        else {
          this.error_message = data;

        }
      })

    }
  }

  ok() {
    $(this.Resetpopup.nativeElement).modal('hide');
    this.router.navigate(['']);
  }

}
