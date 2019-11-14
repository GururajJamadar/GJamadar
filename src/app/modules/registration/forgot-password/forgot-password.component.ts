import { Component, OnInit } from '@angular/core';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { FormGroup, FormBuilder, Validators,FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
public fuser = {};
  constructor(private restService: RestserviceService, private router: Router) { }
  ngOnInit() {
  }
  //
  public test1
  public error_mobileno
  public mobileno
  public mobile_number;


  onSubmit(mobiles): void {
    let mobile_no = {
      'mobile_number': mobiles
    }

    localStorage.setItem('mobile', mobiles);
    localStorage.getItem('mobile');
    console.log("in component dataaa", mobiles);
    console.log("in component dataaa", localStorage.getItem('mobile'));

    let url : string = ApplicationUrls.FORGOTPASSWORD;
    this.restService.Post(url,mobile_no).subscribe(
      backendres => {
        console.log("response from backend", backendres);
        this.test1 = backendres;
        if (this.test1.a == 1) {
          this.router.navigate(['registration/verifyotp']);
        }
        else {
          this.error_mobileno = "Mobile Number Does Not Exist"
        }

      },
      error => console.log("errrroooooorrr", error)
    )

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  login123() {
    this.router.navigate(['']);

  }
  verify() {
    this.router.navigate(['verifyotp']);



  }
}


