import { Component, OnInit } from '@angular/core';
import { Inject,ViewChild,ElementRef } from '@angular/core';
import { RestserviceService } from '../../core/Services/RestService/restservice.service';
import { LoginService } from '../../core/Services/LoginService/login.service';
import { ApplicationUrls } from '../../core/models/applicationUrls';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatePipe } from '@angular/common';
declare var $;
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import {FormBuilder,FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

      @ViewChild ('signUpform',{static:false}) signUpform:ElementRef
    @ViewChild ('signup',{static:false}) signup:ElementRef;
    @ViewChild ('signinpopup',{static:false}) signinpopup:ElementRef;
    @ViewChild ('clientbooking2',{static:false}) clientbooking2:ElementRef;
    @ViewChild ('proffdata',{static:false}) proffdata:ElementRef;

    model: any ={};
    public mobileno;
    public mobilenumber;
    public otp;
    public check_mobile;
    public registration:any=[];
    public selected:boolean;
    public reg:any=[];
    public onlineavil: any = [];
    public livedata;
    public latest_date;
    public booking_slots1;
    public mobile_number;
    // public profile_photo;
    public clidata;
    public message;

    //login variables
    public logi:boolean=true;
    public logoutt:boolean=true;
    public sigup:boolean=true;
    public Home:any;
    public data:any;

    current_user: any = 0;

    firstFormGroup: FormGroup;

constructor(public dialog: MatDialog,private config: NgbRatingConfig, private datePipe: DatePipe,private restServices:RestserviceService,private router:Router,private service:LoginService) {}

 ngOnInit() {
   this.signuppopupopen();
   this.Livepofessionals_avilability();
     this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    let date = new Date();
         let latest_date1=this.datePipe.transform(date,"yyyy-MM-dd")
         this.latest_date=latest_date1
         console.log('&&&&&&&&*****88888888888888888888',latest_date1);
//****login function for homepage header ***********//
      this.service.current_user.subscribe((data: any) => {
      this.current_user = data;
      console.log('hiiiiiiiiiiiiiiii', data);
    });
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        console.log("urllllllllllll",event.url);
       
     if((event.url == '/registration/login') || (event.url == '/registration/signup')) 
        {
        this.logoutt=false;
        this.logi=true;
        this.sigup=true;
        }
        else 
        {
        this.logoutt=true;
        this.logi=false;
        this.sigup=false;
       
        }
      }
    })
    }
    //****login logout function for homepage header ***********//
    logoutuser(data){
    this.service.changeCurrentUser('0');
    this.service.logout11(data).subscribe(
      backendres => {
        console.log("response from backend", backendres);
        localStorage.clear();
        this.router.navigate(['/registration/login'])
      })
   }
   //********************************//

    public show1: boolean;
    public show2:boolean;
    public Account;
    valuechange(Account) {
      if (Account == 'Professional') {
        this.show1 = true;

      }
      else {
        this.show1 = false
        this.show2 = false

      }
      console.log("vlaueueuue", Account)

    }

keyPress1(event: any) {
    const pattern = /[a-zA-Z ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  keyPress2(event: any) {
  const pattern = /[0-9]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}


 registerfirst_usermodal(){
      $(this.signinpopup.nativeElement).modal('show');
}

closemodel(){

      $(this.signinpopup.nativeElement).modal('hide');
      $(this.proffdata.nativeElement).modal('hide');
}
 proffDetails(data){
   this.profiledetails=data;
   if( this.profiledetails){
     console.log("Astrologer details ",data.first_name);
      $(this.proffdata.nativeElement).modal('show');
   }
   console.log("..........##########",this.profiledetails);
  
 }

 Accounttypes = [
    { values: "User", name: "User" },
    { values: "Professional", name: "Professional" }

  ];

Professions = [
    { values: "Astrologer", name: 'Astrologer' },
    { values: "Academics", name: 'Academics' },
    { values: "Sports", name: 'Sports' },
    { values: "LifeStyle", name: 'LifeStyle' },
    { values: "Cooking", name: 'Cooking' }
  ];

public id:any;
sinupformsopen(){
    $(this.signUpform.nativeElement).modal('show')

}
signuppopupopen(){
  // alert(123);
  let popups = localStorage.getItem("popup");
        
  if(popups=='Open'){
  localStorage.removeItem('popup');
      this.id = setInterval(() => {
    this.sinupformsopen(); 
  }, 500);
  
  }
 
}
closemodal(){
    if (this.id) {
    clearInterval(this.id);
      $(this.signUpform.nativeElement).modal('hide')
  }
  else{
    $(this.signUpform.nativeElement).modal('hide')
  }
}
ngOnDestroy() {
  if (this.id) {
    clearInterval(this.id);
  }
}

public professionData:any={}
onFormSubmit(data){
   
  $(this.signUpform.nativeElement).modal('hide')
  this.professionData=data;
  let userurl=ApplicationUrls.USERREGISTRATION;
    let professionalurl=ApplicationUrls.PROFESSIONALREGISTRATION;
  console.log("data",data);
  console.log("****FORM DATA****",data)
  if (data['Account']=="User"){
      this.restServices.Post(userurl,data).subscribe(backenddata =>{
        console.log("get datattaa", backenddata);
        if(backenddata=="Registration success"){
           $(this.signup.nativeElement).modal('show')
          
        }

 });
  }
  else{
      this.restServices.Post(professionalurl,data).subscribe(backenddata =>{
        console.log("get datattaa", backenddata);
            this.check_mobile = backenddata.msg.mobile_number;
            console.log("$$$$$$$$$$$",this.check_mobile)
            let test = localStorage.setItem('mobile', this.check_mobile);
        if(backenddata.msg.message == "Registration Successfull"){
          $(this.signup.nativeElement).modal('show')
          // $(this.signup.nativeElement).modal('hide');
        }
 });
  }
}

onProfileChange(event:any) {
  console.log("queensland",event);
  if(event=="profession"){
    this.selected=true;
  }
  else{
   this.selected=false;
  }
}
getdata(event:any) {
  console.log("queensland",event);
  this.mobileno=event;
}
public count;
public rate;
public Livepofessionals_avilability(){
  let url:string = ApplicationUrls.ONLINEALLTYPEAVILABLITY;
  this.restServices.Get(url).subscribe(data=>{
    this.livedata=data;  
    // this.count=this.livedata.length;
    // this.rate=this.livedata.ratings;
    //  if(this.rate < 3){
       // console.log("rate count",this.rate.length);
    //  }
    console.log('PPPPPPPPPPPPPPPP',  this.livedata);
    // console.log("total",this.count); 
    // console.log('rattings',);
  });
}
verifyotp(event:any) {
  console.log("otp entered",event);
  console.log("mobilenumber",this.mobileno);
  this.otp=event;
  let otp=this.otp;
  let mobilenumber=this.mobileno;
    let data={"mobilenumber":mobilenumber,"otp":otp};
    let verifyotp=ApplicationUrls.verifyotp;
   this.restServices.Post(verifyotp,data).subscribe(backenddata =>{
        console.log("get datattaa", backenddata);
});
}
sendotp() {
  console.log("mobilenumber",this.mobileno);
  let mobilenumber=this.mobileno;
  let data={"mobilenumber":mobilenumber};
    let sendotp=ApplicationUrls.SENDOTP;
   this.restServices.Post(sendotp,data).subscribe(backenddata =>{
        console.log("get datattaa", backenddata);
});
}
    public shows:boolean = false;
    public profiledetails;
     booking10(data){
           console.log("Astrologer details ",data.first_name);
           this.profiledetails=data;
           console.log("..........##########",this.profiledetails);
           $(this.clientbooking2.nativeElement).modal('show');
            this.shows = true;
}
 booknow(data){
   let tokens=localStorage.getItem('token')
   console.log('&&&&&&&&',tokens)
   if(tokens==null){
      $(this.clientbooking2.nativeElement).modal('hide');
     $(this.signinpopup.nativeElement).modal('show');
     
   }
   else{
           $(this.clientbooking2.nativeElement).modal('hide');
             let obj={'date_of_booking':this.latest_date,'mobile_number':data.mobile_number}
             this.restServices.changeMessage(obj);
             this.router.navigate(['/user/bookingappoinment'])
   }
 }


  Redirect() {
    $(this.signUpform.nativeElement).modal('hide')
      $(this.signup.nativeElement).modal('hide')
    if (this.professionData.proftype == "Astrologer") {
      this.router.navigate(['/registration/astrosignup']);

    } else if (this.professionData.proftype == "Cooking") {
      this.router.navigate(['/registration/cookingsignup']);

    } else if (this.professionData.proftype == "LifeStyle") {
      this.router.navigate(['/registration/lifestylesignup']);
    }
    else if (this.professionData.proftype == "Sports") {
      this.router.navigate(['/registration/sportssignup']);
    }
    else if (this.professionData.proftype == "Academics") {
      this.router.navigate(['/registration/academicssignup']);

    }
    else if (this.professionData.Account = "User") {
      this.router.navigate(['/registration/login']);

    }
   
  }
}