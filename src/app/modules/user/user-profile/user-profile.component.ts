import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import  { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ApplicationUrls } from '../../../core/models/applicationUrls';



declare var $;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('updatesucess',{static:false}) updatesucess:ElementRef;
   @ViewChild('updatesucess1',{static:false}) updatesucess1:ElementRef;
   @ViewChild('updatesucess2',{static:false}) updatesucess2:ElementRef;
   
   keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  public clientProfiPic: File;
  public selectedProfilePic: File;
  selectProfilePic(event: any) {
   
      this.selectedProfilePic = <File> event.target.files[0];
      const pfp = new FormData();
      pfp.append("image",this.selectedProfilePic)
      console.log("imaage in upload",pfp)
      this.restService.Get(ApplicationUrls.UPLOAD_PROFILE).subscribe(
        responseData =>{
          console.log("dataa from backend",responseData);
          $(this.updatesucess2.nativeElement).modal('show');
          this.clientProfiPic = responseData;
          this.ngOnInit();
        });
        error => console.log("dataa from backend",error);
  }

  firstForm: FormGroup;
  secoendForm: FormGroup;
  public countryList: any;
  cities: Array<any>;
  constructor( private router:Router, private restService:RestserviceService ,
    private formBuilder: FormBuilder,) {
      this.countryList = this.restService.countryList1;
      console.log(this.countryList,'kkk');
     }
     changeCountry(count) {
       console.log(count);
      this.cities = this.countryList.find(con => con.name == count).cities;
      console.log(this.cities);
    }
  public message:string;
  public clidata:any;
  public value;
  ngOnInit() {
    
    this.restService.Get(ApplicationUrls.CLIENT_DETAILS).subscribe(clientdata => {
      console.log("the data from the backend",clientdata.clientData);
      this.clidata = clientdata.clientData;
      this.restService.currentMessage.subscribe(message => this.message = message);
      this.firstForm = this.formBuilder.group({
      first_name: ['', Validators.required],
        mobile_number: ['', Validators.required],
        gender: ['', Validators.required],
        State: ['', Validators.required],
        country: ['', Validators.required],
        email_id: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        date_of_birth: ['', Validators.required],
        time_of_birth: ['', Validators.required],
        place_of_birth: ['', Validators.required],
        });
    this.secoendForm = this.formBuilder.group({
      billing_cus_name: ['', Validators.required],
        billing_cus_address: ['', Validators.required],
        billing_cus_state: ['', Validators.required],
        billing_cus_zipcode: ['', Validators.required],
        billing_cus_city: ['', Validators.required],
        billing_cus_mobile: ['', Validators.required],
        billing_cus_email: ['', Validators.required]
      
  });
    })
    }
    public data;
  onSubmit1(firstForm: NgForm): void {
    console.log("aaaaaaaaaaaaaaaaaaaa",firstForm.value);
    this.data=firstForm.value;
    let url:string=ApplicationUrls.CLIENTUPDATE;
    this.restService.Post(url,this.data).subscribe( respback => {
     console.log("the data from the backend",respback);
      $(this.updatesucess.nativeElement).modal('show');
          })
  }
  onSubmit2(secoendForm: NgForm): void {
    console.log("aaaaaaaaaaaaaaaaaaaa",secoendForm.value);
    this.data=secoendForm.value;
    let url:string=ApplicationUrls.CLIENTUPDATE;
    this.restService.Post(url,this.data).subscribe( respback => {
      console.log("the data from the backend",respback);
      $(this.updatesucess1.nativeElement).modal('show');
          })
  }
 
 
  cancel_home () {
     console.log("im in login component");
     this.router.navigate(['clientsidebar']);
   }

}
 
