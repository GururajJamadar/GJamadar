import { Component, OnInit } from '@angular/core';
import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
import { NgForm } from '@angular/forms';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { Router } from '@angular/router';
declare var $;

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-sportssignup',
  templateUrl: './sportssignup.component.html',
  styleUrls: ['./sportssignup.component.scss']
})
export class SportssignupComponent implements OnInit {

     public days:any = [];
     public em: any;
     public employee1Form: any = {}
     public countryList: any;
     dropdownList = [];
     dropdownList1 = [];
     selectedItems: Map<string, Array<any>>;
     selectedItems1: Map<string, Array<any>>;
     public value;
     public date: any;
     public am: any;
     lang_roles = [];
     public signupdata: any = {}
     public checkeddata = [];

  dropdownSettings = {};
  dropdownSettings1 = {};
  users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];



     cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }


  constructor(private restserv:RestserviceService, private router:Router) { }

public mobile_number;
  ngOnInit() {
    this.mobile_number = localStorage.getItem('mobile');
    this.countryList = this.restserv.countryList1;

        this.selectedItems = new Map<string, Array<any>>();
    this.users
    this.dropdownList = [
      { "id": 1, "itemName": "Boxing" },
      { "id": 2, "itemName": "Badimation" },
      { "id": 3, "itemName": "Bowling" },
      { "id": 4, "itemName": "Billards" },
      { "id": 5, "itemName": "Chess" },
      { "id": 6, "itemName": "Carrom" },
      { "id": 7, "itemName": "Table Tennis" }
    ];
    this.selectedItems["1"] = [
      { "id": 2, "itemName": "Boxing" },
      { "id": 3, "itemName": "Badimation" }
    ];
    this.selectedItems["2"] = [
      { "id": 5, "itemName": "Bowling" }
    ];
    this.selectedItems["3"] = [
      { "id": 1, "itemName": "Boxing" },
      { "id": 5, "itemName": "Chess" }
    ];
    this.selectedItems["4"] = [
      { "id": 5, "itemName": "Chess" },
      { "id": 6, "itemName": "Carrom" },
    ];
    this.selectedItems["5"] = [
      { "id": 5, "itemName": "Chess" },
      { "id": 6, "itemName": "Carrom" },
      { "id": 7, "itemName": "Table Tennis" },
    ];
    this.selectedItems["6"] = [
      { "id": 3, "itemName": "Bowling" },
      { "id": 4, "itemName": "Billards" },
      { "id": 6, "itemName": "Carrom" },
      { "id": 2, "itemName": "Badimation" },
    ];
    this.dropdownList1 = [
      { "id": 1, "itemName": "Cricket" },
      { "id": 2, "itemName": "Volley Ball" },
      { "id": 3, "itemName": "Foot Ball" },
      { "id": 4, "itemName": "Basket Ball" },
      { "id": 5, "itemName": "Hockey" },
    ];
    this.selectedItems["1"] = [
      { "id": 1, "itemName": "Cricket" },
      { "id": 2, "itemName": "Volley Ball" }
    ];
    this.selectedItems["2"] = [
      { "id": 5, "itemName": "Hockey" }
    ];
    this.selectedItems["3"] = [
      { "id": 3, "itemName": "Foot Ball" },
      { "id": 4, "itemName": "Basket Ball" }
    ];
    this.selectedItems["4"] = [
      { "id": 3, "itemName": "Foot Ball" },
      { "id": 4, "itemName": "Basket Ball" },
      { "id": 5, "itemName": "Hockey" },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Indoor",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
    this.dropdownSettings1 = {
      singleSelection: false,
      text: "Select Outdoor",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

onItemSelect(item: any) {
   
  }
  OnItemDeSelect(item: any) {
   
  }
  onSelectAll(items: any) {
    
  }
  onDeSelectAll(items: any) {
   
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
  
  llang_roles: string[] = ['Hindi', 'Bengali', 'Gujarati', 'Konkani', 'Manipuri',
                           'Oriya', 'Santali', 'Telugu', 'Assamese', 'Dogri', 'Kashmiri', 'Malayalam', 'Nepali', 'Sanskrit', 'Tamil', 'Urdu', 'English', 'Bodo', 'Kannada', 'Maithili', 'Marathi', 'Punjabi', 'Sindhi'];

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
    let propicUrl=ApplicationUrls.UPLOAD_PROF_PHOTO;
    this.selectedProfilePic = <File>event.target.files[0];
    const pfp = new FormData();
    pfp.append("profile_pic", this.selectedProfilePic)
    this.mobile_number = localStorage.getItem('mobile');
    pfp.append("mobile_number", this.mobile_number)
    console.log("Profile pic")
    this.restserv.Post(propicUrl,pfp).subscribe(responseData => {
      },
      error => console.log("dataa from backend", error)
    );
  }
    sportssignup1(employee2Form: NgForm): void {
    let sposignupUrl=ApplicationUrls.SPORTS_SIGNUP;
    const pfp = new FormData();
    pfp.append("image", this.selectedProfilePic)
    this.signupdata = employee2Form.value;
    if (this.signupdata.video_call == undefined || this.signupdata.video_call == " ") {
      this.signupdata.video_call == " ";
    }
    this.em = { "tdata": this.signupdata, "lang_roles": this.lang_roles, "mobile_number": this.mobile_number, "indoor": this.selectedItems, "outdoor": this.selectedItems1 };
    console.log("data in tttttsssss",this.em)
    this.restserv.Post(sposignupUrl,this.em ).subscribe(data => {
        console.log("response from backend", data);
        this.router.navigate(['/registration/bankdetail']);
      });
    error => console.log("errrroooooorrr", error);

  }
}

