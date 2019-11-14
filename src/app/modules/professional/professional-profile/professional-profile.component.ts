import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import * as moment from 'moment';
import { RestserviceService} from '../../../core/Services/RestService/restservice.service'
declare var $;
import { Observable } from 'rxjs';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';



@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss']
})
export class ProfessionalProfileComponent implements OnInit {
  @ViewChild('updatesucess',{static: false}) updatesucess:ElementRef;
  @ViewChild('updatesucess1',{static: false}) updatesucess1:ElementRef;
 @ViewChild('updatesucess2',{static: false}) updatesucess2:ElementRef;
  
  selected = "1";

   constructor(private router:Router,private restservice:RestserviceService) {}

  ngOnInit() {

  this.personalde = true;
    this.prof_view_details1();
  }


  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  public mobile_number;
  public ProfiPic: File;
  public selectedProfilePic: File;

    editphoto(uploadData):Observable <any>{
  let url:string =ApplicationUrls.UPDATEPROFILEPHOTO ;
  return this.restservice.Post(url,uploadData);

}
 
  selectProfilePic1(event: any) {
    this.selectedProfilePic = <File> event.target.files[0];
      const pfp = new FormData();
      pfp.append("image",this.selectedProfilePic)
      console.log("imaage in upload",pfp)
      this.editphoto(pfp).subscribe(
        responseData =>{
          console.log("dataa from backend",responseData);
          $(this.updatesucess2.nativeElement).modal('show');
          this.ngOnInit();
        });
        error => console.log("dataa from backend",error);
  }
  public gender;
 genders =   ['Male','Female','Transgender'];
  
  public state;
  
     states: string[] =[
      'Karanataka', 'Andhra Pradesh', 'Telangana', 'Assam', 'Arunachal Pradesh',
      'Bihar', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Uttar Pradesh', 'West Bengal',
      'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
      'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu','Tripura',
      'Delhi', 'Goa','Pondicherry','Lakshdweep','Daman & Diu','Dadra & Nagar',
      'Chandigarh','Andaman & Nicobar','Uttaranchal','Jharkhand','Chattisgarh'
    ]; 
    public country;

countries:string[]=["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
  ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
  ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
  ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
  ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
  ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
  ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
  ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
  ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
  ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
  ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
  ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
  ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
  ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
  ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

   public languages;

    Languages:string[]=['Hindi', 'Bengali', 'Gujarati', 'Konkani', 'Manipuri', 'Oriya', 'Santali', 'Telugu', 'Assamese', 'Dogri', 'Kashmiri', 'Malayalam', 'Nepali', 'Sanskrit', 'Tamil', 'Urdu', 'English', 'Bodo', 'Kannada', 'Maithili', 'Marathi', 'Punjabi', 'Sindhi'];

public area;

    Areas:string[]= ['Fengshui', 'Vedic astrologer', 'Numerology', 'Tarot Card Reading', 'Vaastu'];

public model : any ={}

public value;

  public em:any;
 
  days = [];

public address;
 public data:any;
  public dem: any;
  public estime1:any;
  public mstime1:any;
  public metime1:any;
  public employee1Form:any = {}
 public personalde = false;
  public officede = false;

    selected1(){
    this.officede = false;
    console.log("im in personal details");
    this.personalde = true;
    this.ngOnInit()
    
  }
  selected2(){
    this.personalde = false;
    console.log("im in office details");
    this.officede = true;
    }
  dateofbirth;


      personalupdate1(obj):Observable <any>{
    let url:string = ApplicationUrls.PERSONALUPDATE;
    return this.restservice.Post(url,obj);  
  }

  personalupdate(viewdetails){
   console.log("in component dataaa" ,viewdetails);

  console.log("finalllllll",this. dateofbirth);

this.personalupdate1(viewdetails).subscribe( respback => {
      console.log("the data from the backend",respback);
       $(this.updatesucess.nativeElement).modal('show');   
    
})
}
 officeupdate1(viewdetails):Observable <any>{
    console.log("im in service login data",viewdetails);
    let url:string = ApplicationUrls.OFFICE_UPDATE;
    return this.restservice.Post(url,viewdetails);  
}
officeupdate(viewdetails){

  console.log("in component dataaa" ,viewdetails);
this.officeupdate1(viewdetails).subscribe( respback => {
      console.log("the data from the backend",respback);
      $(this.updatesucess1.nativeElement).modal('show');
                   
})
}

cancel_upload(){
this.router.navigate(['Professionalhome']);
}

public mstime;
public metime;    
public estime;
public eetime;

    mstimings: any =['06:00', '06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30', '12:00 ', '12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30', '24:00'];
    metimings: any =['06:00', '06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30', '12:00 ', '12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30', '24:00'];
    estimings: any =['06:00', '06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30', '12:00 ', '12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30', '24:00'];
    eetimings: any =['06:00', '06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30', '12:00 ', '12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30', '24:00'];
      
      public role;
 ddays = [{ text: 'Mon', value: 1 },
                       { text: 'Tue', value: 2 },
                       { text: 'Wed', value: 3 },
                       { text: 'Thur', value: 4 },
                       { text: 'Fri', value: 5 },
                       { text: 'Sat', value: 6 },
                       { text: 'Sun', value: 7 },
                       ];
                
                 public profileViews;
           public first_name;
           public description;
           public area_of_expertise;
           public experience;
           public email_id;
           public aadhar_number;
           public date_of_birth;
           public bank_name;
           public bank_acnt_number;
           public dob;
           public bank_ifsc;
           public bank_address;
           public video_price;


  prof_view_details():Observable <any>{
    console.log("im in service login data");
    let url:string = ApplicationUrls.PROFESSIONAL_VIEW_PROFILE;
    return this.restservice.Get(url);  
  }


 prof_view_details1(){
            this.prof_view_details().subscribe(data=>{
              this.profileViews=data;
              console.log('qqqqqqqqqqqqqqqqqqq',this.profileViews);
              this.first_name=data.first_name;
              this.description=data.description;
              this.mobile_number = data.mobile_number;
              this.area_of_expertise=data.area_of_expertise;
              this.experience=data.experience
              this.gender=data.gender
              this.bank_acnt_number=data.bank_acnt_number;
              this.bank_name=data.bank_name;
              this.aadhar_number=data.aadhar_number;
              // this.date_of_birth=data.date_of_birth;
              this.email_id=data.email_id;
              this.bank_ifsc=data.bank_ifsc;
              this.bank_address=data.bank_address;
              this.video_price=data.video_price;

              // this.dob = moment(data.date_of_birth.year).format('MM/DD/YYYY');
              // console.log('ooooooooo', this.profileViews.date_of_birth['year']['month']['day']);
            })

          }

}
