import { Component, OnInit,Inject,ViewChild,ElementRef } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
import { ApplicationUrls } from '../../../core/models/applicationUrls';


declare var $;

@Component({
  selector: 'app-lifestyle-home',
  templateUrl: './lifestyle-home.component.html',
  styleUrls: ['./lifestyle-home.component.scss']
})
export class LifestyleHomeComponent implements OnInit {


   @ViewChild('lifestyleBookingModal',{static:false}) lifestyleBookingModal:ElementRef;
  @ViewChild('offlineModal',{static:false}) offlineModal:ElementRef;
  @ViewChild('signinpopup',{static:false}) signinpopup:ElementRef;
 

   // private onlineavil: any = [];
  private onlineavil2: any = [];
  public selectoptions: any = [];
  currentRate= 5; 
  //  astrologers: string[] = ['Vedic','Numeriology','vaastu'];
  public Lifestyle_types;
  FieldsChange(values: any) {
    this.Lifestyle_types = values;
    console.log(values);
  }

  private onlineavil: any = [];
  private onlineavil2lifestyle: any = [];
  // public gym = [];
  public yoga = [];
  public karate = [];
  public showGym = false;
  public showYoga = false;
  public showKarate = false;
  public priceList = [];
  public priceList1 = [];
  public priceList2 = [];
  public priceList3= [];
  public showPrice = false;
  public showPrice1 = false;
  public showPrice2 = false;
  public showPrice3 = false;
  public showState = false;
  public checkedStates = [];
  public state: any;
   public latest_date;
  constructor(private config: NgbRatingConfig, public dialog: MatDialog, private restserv:RestserviceService,  private router: Router)
   {   config.max = 5; config.readonly = true; }

  ngOnInit() {
    this.online_avilability_lifestyle();
    // this.online_avilability();

     let date = new Date();
    let latest_date1 = date;
    this.latest_date = latest_date1
    console.log('&&&***', latest_date1);

  }
 public show1:boolean = false;
    public profiledetails;
     bookingLifestyle(data){
           console.log("Astrologer details ",data);
           this.profiledetails=data;
           $(this.lifestyleBookingModal.nativeElement).modal('show');
            this.show1 = true;
}
booknowLife(data){
   let tokens=localStorage.getItem('token')
   console.log('&&&&&&&&',tokens)
   if(tokens==null){
      $(this.lifestyleBookingModal.nativeElement).modal('hide');
     $(this.signinpopup.nativeElement).modal('show');
   }
   else{
           $(this.lifestyleBookingModal.nativeElement).modal('hide');
             let obj={'date_of_booking':this.latest_date,'mobile_number':data.mobile_number}
             this.restserv.changeMessage(obj);
        this.router.navigate(['/user/bookingappoinment']);
   }
 }
offlineBook(){
  $(this.offlineModal.nativeElement).modal('show');
}
  public selectedstates = [];
  public stateOption;
  public appended;
  state_wise_Filter(event) {
    let ontest
    this.stateOption = event.source.value;
    if (event.checked == true) {
      console.log("type based chefs left",this.workoutLife);
      if (this.workoutLife.length > 0) {
        for (let j = 0; j < this.workoutLife.length; j++) {
          let test = this.workoutLife[j].state;
          console.log("state from backend",test);
          console.log("state choosed",this.stateOption);

          if ((this.stateOption == test)) {
            this.gym = this.workoutLife[j];
            continue;
          }
            console.log("before pushing", this.workoutLife);
            this.workoutLife.push(this.gym);
            this.lifestyle_show = true;
            this.state_show = true;
            console.log("After pushed", this.workoutLife);
            
        }
      }
      else {
        for (let i = 0; i < this.onlineavil2.length; i++) {
          ontest = this.onlineavil2[i].state;
          if (this.stateOption == ontest) {
            console.log(this.onlineavil2[i]);
            this.gym = this.onlineavil2[i];
            this.state_show = true;
            this.lifestyle_show = false;
            this.live_lifestyleshow1 = false;
            this.gym = this.onlineavil2[i];
            this.statewise.push(this.gym);
          }
        }
      }
    }
    else {
      let tes2
      if (this.statewise.length > 0) {
        console.log("z", this.statewise.length);
        for (let i = 0; i < this.statewise.length; i++) {
          let str = this.statewise[i].state;
          let s = this.stateOption;
          console.log(str);
          console.log(s);
          console.log(i)
          if (s === str) {
            console.log(i)
            let k = this.statewise[i].state.length;
            console.log(k)
            tes2 = this.statewise.splice(i, 1);  //this is the part where I 'delete' the object
            this.state_wise_Filter(event);
          }
          else {
            this.appended = true;
          }
        }
      }
      else {
        alert("not2");
        this.live_lifestyleshow1 = true;
      }
      console.log("high", tes2)
    
    }
  }
  public statewise: any = [];
  public test: any;
  public lifestyleOption;
  public lifestyle_show;
  public state_show;
  public gym: any = [];
  public workoutLife: any = [];
  lifestyle_type_filter(ee) {
    this.test = ee.source.id;
    let str = this.test.replace(/^"|"$/g, '');
    console.log('999999999999999999', str);
    // console.log("fdddddddddddddddd", this.onlineavil2);
    if (ee.checked == true) {
      console.log("selected options are", this.selectoptions);
      for (let i = 0; i < this.onlineavil2.length; i++) {
        console.log("hhh", this.test);
        if (this.onlineavil2[i][this.test] == "Gym") {
          this.live_lifestyleshow1 = false;
          this.lifestyle_show = true;
          console.log(this.onlineavil2[i][this.test]);
          this.gym = this.onlineavil2[i];
          this.workoutLife.push(this.gym);
        }
        else if (this.onlineavil2[i][this.test] == "Yoga") {
          this.live_lifestyleshow1 = false;
          this.lifestyle_show = true;
          console.log(this.onlineavil2[i][this.test]);
          this.gym = this.onlineavil2[i];
          this.workoutLife.push(this.gym);
        }
        else if (this.onlineavil2[i][this.test] == "Karate") {
          this.live_lifestyleshow1 = false;
          this.lifestyle_show = true;
          console.log(this.onlineavil2[i][this.test]);
          this.gym = this.onlineavil2[i];
          this.workoutLife.push(this.gym);
        }
      }
      console.log(this.workoutLife);
      this.showGym = true;
    }
    else {
      let tes2
      if (this.workoutLife.length > 0) {
        console.log("z", this.workoutLife.length);
        for (let i = 0; i < this.workoutLife.length; i++) {
          let str = this.workoutLife[i][this.test];
          let s = this.test;
          console.log(str);
          console.log(s);
          console.log(i)
          if (s === str.toLowerCase()) {
            console.log(i)
            let k = this.workoutLife.length;
            console.log("K value in lenth is",k)
            tes2 = this.workoutLife.splice(i,k);  //this is the part where I 'delete' the object
            console.log("After splicing",this.workoutLife);
            this.lifestyle_type_filter(ee);
          }
          else {
            this.appended = true;
          }
        }
      }
      else{
      this.live_lifestyleshow1=true;
      this.lifestyle_show = false;
      this.showGym = false;
      
    }
    }
    console.log(this.workoutLife)
  }
  public price_wise: any = []
  public price;
  public priceOption;
  public price_show;
  public astro_500 = [];
  price_wise_Filter(event) {
    this.price = event.source.value;
    console.log("my selected price", this.price);
    if (event.checked == true) {
      console.log("online lifestyle list", this.onlineavil2.length);
      if (this.onlineavil2.length > 0) {
        for (let i = 0; i < this.onlineavil2.length; i++) {
          let pricevalue = this.onlineavil2[i].video_price;
          if (this.price == 1 && pricevalue >= 0 && pricevalue <= 500) {
            console.log("price values are", parseInt(this.price), pricevalue)
            this.gym = this.onlineavil2[i];
            this.price_wise.push(this.gym);
          }
          else if (this.price == 500 && pricevalue >= 501 && pricevalue <= 1500) {
            this.gym = this.onlineavil2[i];
            this.price_wise.push(this.gym);
          }
          else if (this.price == 1500 && pricevalue >= 1501 && pricevalue <= 2000) {
            this.gym = this.onlineavil2[i];
            this.price_wise.push(this.gym);
          }
          else if (this.price == 2000 && pricevalue >= 2001) {
            this.gym = this.onlineavil2[i];
            this.price_wise.push(this.gym);
          }
        }
        console.log("Lifestyle", this.price_wise)
        this.price_show = true;
        this.live_lifestyleshow1 = false;
      }
    }
    else {
      let tes2
      if (this.price_wise.length > 0) {
        console.log("z", this.price_wise.length);
        for (let i = 0; i < this.price_wise.length; i++) {
          let lifestyleprice = this.price_wise[i].video_price;
          let myprice = this.price;
          console.log(lifestyleprice);
          console.log(myprice);
          if (myprice==1 && lifestyleprice<=500){
            tes2 = this.price_wise.splice(i, 1);  //this is the part where I 'delete' the object
            this.price_wise_Filter(event);
          }
          else if (myprice==500 && lifestyleprice >= 501 && lifestyleprice <= 1500) {
            tes2 = this.price_wise.splice(i, 1);  //this is the part where I 'delete' the object
            this.price_wise_Filter(event);
          }
          else if (myprice==1500 && lifestyleprice >= 1501 && lifestyleprice <= 2000) {
            tes2 = this.price_wise.splice(i, 1);  //this is the part where I 'delete' the object
            this.price_wise_Filter(event);
          }
          else if (myprice==2000 && lifestyleprice>=2001) {
            tes2 = this.price_wise.splice(i, 1);  //this is the part where I 'delete' the object
            this.price_wise_Filter(event);
          }
          else {
            this.appended = true;
          }
        }
      }
      else {
        this.live_lifestyleshow1 = true;
      }
      console.log("high", tes2)
    }
  }
  public live_lifestyleshow1: boolean = false;
  public online_avilability_lifestyle() {
  	let urlLifeStyle=ApplicationUrls.ONLINE_LIFESTYLE_AVAILABLE;
    this.restserv.Get(urlLifeStyle).subscribe(data => {
      this.onlineavil2 = data;
      this.live_lifestyleshow1 = true;
      console.log('@@@@@', this.onlineavil2);


    });
  }


  states: string[] = [
    'Karnataka', 'Andhra Pradesh', 'Telangana', 'Assam', 'Arunachal Pradesh',
    'Bihar', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Uttar Pradesh', 'West Bengal',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura',
    'Delhi', 'Goa', 'Pondicherry', 'Lakshdweep', 'Daman & Diu', 'Dadra & Nagar',
    'Chandigarh', 'Andaman & Nicobar', 'Uttaranchal', 'Jharkhand', 'Chattisgarh'
  ];
  priceoptions: any = [
    { Value: 1, price: '<500' },
    { Value: 500, price: '500-1500' },
    { Value: 1500, price: '1501-2000' },
    { Value: 2000, price: '>2000' },

  ]


}
