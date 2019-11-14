import { Component, OnInit,ViewChild,ElementRef,Inject } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $;
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { ApplicationUrls } from '../../../core/models/applicationUrls';



@Component({
  selector: 'app-cooking-home',
  templateUrl: './cooking-home.component.html',
  styleUrls: ['./cooking-home.component.scss']
})
export class CookingHomeComponent implements OnInit {
@ViewChild('lifestyleBookingModal',{static:false}) lifestyleBookingModal:ElementRef;
  @ViewChild('offlineModal',{static:false}) offlineModal:ElementRef;
  @ViewChild('signinpopup',{static:false}) signinpopup:ElementRef;
  

  private onlineavil: any = [];
  private onlineavil2: any = [];
  public selectoptions: any = [];

  private onlineavil2cooking: any = [];
  public checkedStates = [];
  public state: any;
  public priceList = [];
  public priceList1 = [];
  public priceList2 = [];
  public priceList3= [];
  public showPrice1 = false;
  public showPrice2 = false;
  public showPrice3 = false;
  public northIndian= [];
  public southIndian= [];
  public mexican= [];
  public chinese=[];
  public italian=[];
  public andhraStyle=[];
  public american=[];
  public caribbean=[];
  public thai=[];
  public spanish=[];
  public japanese=[];
  public others=[];
  public showNorthIndian=false;
  public showSouthIndian=false;
  public showMexican=false;
  public showChinese=false;
  public showItalian=false;
  public showAndhraStyle=false;
  public showAmerican=false;
  public showCaribbean=false;
  public showThai=false;
  public showSpanish=false;
  public showJapanese=false;
  public showOthers=false;

public Chefs_types;
FieldsChange(values:any){
  this.Chefs_types = values;
  console.log(values);
  }


public latest_date;
  constructor(private config: NgbRatingConfig,
    private restService:RestserviceService,
    private datePipe: DatePipe,private router:Router)
    {     
      config.max = 5;
      config.readonly = true;}
      currentRate= 5;  
      ngOnInit() {
      this.online_avilability_chefs();
    // this.online_avilability();

    let date = new Date();
    let latest_date1 = this.datePipe.transform(date, "yyyy-MM-dd")
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
             this.restService.changeMessage(obj);
        this.router.navigate(['/user/bookingappoinment']);
   }
 }
offlineBook(){
  $(this.offlineModal.nativeElement).modal('show');
}
 
   public showCuisine=false;
   public showState = false;
   public showPrice = false;

public areafilter: any =[];
cuisine_type_filter(e){
   console.log('999999999999999999',e);
if(e.checked){ 
  let obj ={'area_of_expertise':e.source.value}
  console.log("obj",obj);
  this.restService.Get(ApplicationUrls.ONLINE_FILTER).subscribe(data => {
      this.areafilter = data;
      console.log('@@@@@', this.areafilter);
      this.showCuisine = true;
    });       
   }
   else{
     this.showCuisine = false;
   }
   
 }

public statedata: any =[];
  state_wise_filter(e){
    console.log('999999999999999999',e);
  if(e.checked){ 
    let obj ={'state':e.source.value}
    console.log("obj",obj);
  this.restService.Get(ApplicationUrls.ONLINE_FILTER_STATE).subscribe(data => {
      this.statedata = data;
      console.log('@@@@@', this.statedata);
      this.showState = true;
    });       
   }
   else{
     this.showState = false;
   }
   
 }
 

public pricedata: any =[];
  price_wise_filter(e){
   console.log('999999999999999999',e);
  if(e.checked){ 
  let obj ={'price':e.source.value}
  console.log("obj",obj);
  this.restService.Get(ApplicationUrls.ONLINE_FILTER_PRICE).subscribe(data => {
      this.pricedata = data;
      console.log('@@@@@', this.pricedata);
      this.showPrice = true;
    });       
   }
   else{
     this.showPrice = false;
   }
   
 }


  public live_chefshow1: boolean = false;
  public online_avilability_chefs() {
    this.restService.Get(ApplicationUrls.ONLINE_CHEFS_AVAILABILITY).subscribe(data => {
      this.onlineavil2 = data;
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

    cuisines:string[]=[
    'North Indian','South Indian','Mexican','Chinese','Italian','Andhra Style','American',
    'Carribean','Thai','Spanish','Japanese','Others'
    ];

  priceoptions: any = [
    { Value: 1, price: '<500' },
    { Value: 500, price: '500-1500' },
    { Value: 1500, price: '1501-2000' },
    { Value: 2000, price: '>2000' },

  ]
}

