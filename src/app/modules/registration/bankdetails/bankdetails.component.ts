import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import {Router} from '@angular/router';
import { ApplicationUrls } from '../../../core/models/applicationUrls'
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';



@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.scss']
})
export class BankdetailsComponent implements OnInit {


	 constructor(private router:Router, private restService:RestserviceService) { }
  public mobile_number;

  ngOnInit() {
  }

	keyPress1(event: any) {
  const pattern = /[a-z\+\A-Z]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}

keyPress(event: any) {
  const pattern = /[0-9\+\-\ ]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}

public value;
 public em:any;

 loginUser(employee3Form: NgForm): void{

	    console.log("appended data",employee3Form.value);
	          this.mobile_number = localStorage.getItem('mobile');
	          this.em = {"gdata":employee3Form.value,"mobile_number":this.mobile_number};
	        console.log("data is",this.em);

	       let url:string = ApplicationUrls.BANK_DETAILS;
 	  this.restService.Post(url,this.em).subscribe(
	    data =>{
	      console.log("response from backend",data);
        if(data.message=="Registration Successfull")
        {
          alert(data.message);
        }
	      localStorage.removeItem('mobile');
	      this.router.navigate(['/registration/login']);
	      },
	             error => console.log("errrroooooorrr",error)
	            )
	}
	Ok(){
    this.router.navigate(['/']);
  }
 
}
