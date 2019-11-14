import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.scss']
})
export class VerifyotpComponent implements OnInit {
public votp={}
  public a:any;
  constructor(private restService:RestserviceService,private router:Router) { }

  ngOnInit() {
  }
  //validation
keyPress(event: any) {
  const pattern = /[0-9\+\-\ ]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}

public test:any
public Userotp:any;
public error_message:any
verifyOtp (data): void {
	let url : string = ApplicationUrls.verifyotp;
  console.log(data);
  let obj={'otp':data}
  this.restService.Post(url,obj).subscribe(
    backend =>{
              console.log("response from backend",backend);
      this.test = backend;
      if(this.test.a== 1){
      this.router.navigate(['registration/resetpassword']);

      } else{
        this.error_message="OTP is Not Match"

      }  
    error => console.log("errrroooooorrr",error)
    })
}


}
