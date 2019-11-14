 import { Component, OnInit } from '@angular/core';
import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
import { NgForm } from '@angular/forms';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-astrosignup',
  templateUrl: './astrosignup.component.html',
  styleUrls: ['./astrosignup.component.scss']
})
export class AstrosignupComponent implements OnInit {

     public days:any = [];
     public em: any;
     public employee1Form: any = {}
     public countryList: any;
     public value;
     public date: any;
     public am: any;
     lang_roles = [];
     public signupdata: any = {}
     public checkeddata = [];
     private selectedLink: string = "fengshui";
     
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

  keyPress1(event: any) {
    const pattern = /[a-z\+\A-Z ]/;
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
    if (this.signupdata.fengshui == undefined || this.signupdata.fengshui == " ") {
      this.checkeddata.push(this.signupdata.fengshui == " ");
    }
    if (this.signupdata.vedic == undefined || this.signupdata.vedic == " ") {
      this.checkeddata.push(this.signupdata.vedic == " ");
    }
    if (this.signupdata.numerology == undefined || this.signupdata.numerology == " ") {
      this.checkeddata.push(this.signupdata.numerology == " ");
    }
    if (this.signupdata.tarotcardreading == undefined || this.signupdata.tarotcardreading == " ") {
      this.checkeddata.push(this.signupdata.tarotcardreading == " ");
    }
    if (this.signupdata.vaastu == undefined || this.signupdata.vaastu == " ") {
      this.checkeddata.push(this.signupdata.vaastu == " ");
    }
  }
 public clientProfiPic: File;
  public selectedProfilePic: File;
  selectProfilePic1(event: any) {
    let propicUrl=ApplicationUrls.UPLOAD_PROF_PHOTO;
    this.selectedProfilePic = <File>event.target.files[0];
    console.log(this.selectedProfilePic, "hiiii");
    const pfp = new FormData();
    pfp.append("profile_pic", this.selectedProfilePic)
    this.mobile_number = localStorage.getItem('mobile');
    console.log('********', this.mobile_number)
    pfp.append("mobile_number", this.mobile_number)
    this.restserv.Post(propicUrl,pfp).subscribe(responseData => {
        console.log("dataa from backend", responseData)
      },
      error => console.log("dataa from backend", error)

    );
  }

  llang_roles: string[] = ['Hindi', 'Bengali', 'Gujarati', 'Konkani', 'Manipuri', 'Oriya', 'Santali', 'Telugu', 'Assamese', 'Dogri', 'Kashmiri', 'Malayalam', 'Nepali', 'Sanskrit', 'Tamil', 'Urdu', 'English', 'Bodo', 'Kannada', 'Maithili', 'Marathi', 'Punjabi', 'Sindhi'];

  ddays = [{ text: 'Mon', value: 1 },
  { text: 'Tue', value: 2 },
  { text: 'Wed', value: 3 },
  { text: 'Thur', value: 4 },
  { text: 'Fri', value: 5 },
  { text: 'Sat', value: 6 },
  { text: 'Sun', value: 7 },
  ];

  mstime: any = ['06:00', '06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30',];
  metime: any = ['06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30', '12:00 '];
  estime: any = ['12:00 ', '12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30',];
  eetime: any = ['12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30', '24:00'];

    astrosignup(employee1Form: NgForm): void {
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

    astrosignup1(employee2Form: NgForm): void {

    let profsignUrl=ApplicationUrls.PROFESSIONAL_PERSONAL;
    const pfp = new FormData();
    pfp.append("image", this.selectedProfilePic)
    this.signupdata = employee2Form.value;

    if (this.signupdata.fengshui) {
    } else { this.signupdata.fengshui = false; }

    if (this.signupdata.vedic) {
    } else { this.signupdata.vedic = false; }

    if (this.signupdata.numerology) {
    } else { this.signupdata.numerology = false; }

    if (this.signupdata.tarotcardreading) {
    } else { this.signupdata.tarotcardreading = false; }

    if (this.signupdata.vaastu) {
    } else { this.signupdata.vaastu = false; }

    if (this.signupdata.video_call == undefined || this.signupdata.video_call == " ") {
      this.signupdata.video_call == " ";
    }
    this.em = { "tdata": this.signupdata, "lang_roles": this.lang_roles, "mobile_number": this.mobile_number };
    console.log("datain ttttttsssssss",this.em)
    this.restserv.Post(profsignUrl,this.em).subscribe(
      data => {
        alert(data.message);
        this.router.navigate(['/registration/bankdetail']);

      });
    error => console.log("errrroooooorrr", error);
  }

}
