import { Component, OnInit } from '@angular/core';
import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
import { NgForm } from '@angular/forms';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-lifestylesignup',
  templateUrl: './lifestylesignup.component.html',
  styleUrls: ['./lifestylesignup.component.scss']
})
export class LifestylesignupComponent implements OnInit {

     public days:any = [];
     public em: any;
     public employee1Form: any = {}
     public countryList: any;
     public value;
     public date: any;
     public submitted: boolean = false;
     public am: any;
     type_roles = [];
     lang_roles = [];
  public signupdata: any = {}
  public checkeddata = [];

     cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }

  constructor(private restserv:RestserviceService, private router:Router) { }

public mobile_number;
  ngOnInit() {
    this.mobile_number = localStorage.getItem('mobile');
    this.countryList = this.restserv.countryList1;
  }

    keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

    keyPress1(event: any) {
    const pattern = /[a-z\+\A-Z ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  private selectedLink: string = "gym";

  setradio(e: string): void {

    this.selectedLink = e;

  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) {
      return false;
    }

    return (this.selectedLink === name);
  }

  setDefaultValues() {
    this.checkeddata = [];
    if (this.signupdata.gym == undefined || this.signupdata.gym == " ") {
      this.checkeddata.push(this.signupdata.gym == " ");
    }
    if (this.signupdata.yoga == undefined || this.signupdata.yoga == " ") {
      this.checkeddata.push(this.signupdata.yoga == " ");
    }
    if (this.signupdata.karate == undefined || this.signupdata.karate == " ") {
      this.checkeddata.push(this.signupdata.karate == " ");
    }
  }

  ddays = [{ text: 'Mon', value: 1 },
  { text: 'Tue', value: 2 },
  { text: 'Wed', value: 3 },
  { text: 'Thur', value: 4 },
  { text: 'Fri', value: 5 },
  { text: 'Sat', value: 6 },
  { text: 'Sun', value: 7 },
  ];

llang_roles: string[] = ['Hindi', 'Bengali', 'Gujarati', 'Konkani', 'Manipuri', 'Oriya', 'Santali', 'Telugu', 'Assamese', 'Dogri', 'Kashmiri', 'Malayalam', 
                         'Nepali', 'Sanskrit', 'Tamil', 'Urdu', 'English', 'Bodo', 'Kannada', 'Maithili', 'Marathi', 'Punjabi', 'Sindhi'];
  
  mstime: any = ['06:00', '06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30',];
  metime: any = ['06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30', '12:00 '];
  estime: any = ['12:00 ', '12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30',];
  eetime: any = ['12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30', '24:00'];

    lifestylesignup(employee1Form: NgForm): void {

    console.log("appended data", employee1Form.value);
    this.em = { "gdata": employee1Form.value, "days": this.days, "mobile_number": this.mobile_number };
    console.log("data is", this.em);
    let profaddurl=ApplicationUrls.PROFESSIONALADDRESS;
    this.restserv.Post(profaddurl,this.em).subscribe(data=>{
      console.log("data coming from backend",data);
                 if(data.message=="Registration Successfull"){
         sweetAlert(
  'Registration Successfull.!',
  'Please fill the further details.!',
  'success'
)
      }else{
        sweetAlert("Something went wrong..!",
  "User Doesn't Exits try to register again.",
  'error')
      }
    
    })
   
  }

  public clientProfiPic: File;
  public selectedProfilePic: File;
  selectProfilePic1(event: any) {
   let proPicUrl=ApplicationUrls.UPLOAD_PROF_PHOTO;
    console.log("gfhfgdgd", event)
    this.selectedProfilePic = <File>event.target.files[0];

    const pfp = new FormData();
    pfp.append("profile_pic", this.selectedProfilePic)
    console.log("imaage in upload", pfp)
    this.mobile_number = localStorage.getItem('mobile');
    pfp.append("mobile_number", this.mobile_number)
    this.restserv.Post(proPicUrl,pfp).subscribe(responseData => {
        console.log("dataa from backend", responseData)
      },
      error => console.log("dataa from backend", error)

    );
  }

    lifestylesignup12(employee2Form: NgForm): void {
    let lifestyleUrl=ApplicationUrls.LIFESTYLE_PERSONALINFO;
    console.log("data is", employee2Form.value);
    const pfp = new FormData();
    pfp.append("image", this.selectedProfilePic)
    console.log("imaage in upload", pfp)
    this.signupdata = employee2Form.value;

    if (this.signupdata.gym) {
      console.log("in iffffffffffffff")
    } else { this.signupdata.gym = false; }

    if (this.signupdata.yoga) {
      console.log("in iffffffffffffff")
    } else { this.signupdata.yoga = false; }

    if (this.signupdata.karate) {
      console.log("in iffffffffffffff")
    } else { this.signupdata.karate = false; }

    if (this.signupdata.video_call == undefined || this.signupdata.video_call == " ") {
      this.signupdata.video_call == " ";
    }
    this.em = { "tdata": this.signupdata, "type_roles": this.type_roles, "lang_roles": this.lang_roles, "mobile_number": this.mobile_number };
    this.restserv.Post(lifestyleUrl,this.em).subscribe(data => {
        console.log("response from backend", data);
        this.router.navigate(['/registration/bankdetail']);
      });
    error => console.log("errrroooooorrr", error);

  }

}
