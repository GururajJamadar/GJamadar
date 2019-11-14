import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
import {ApplicationUrls} from '../../../core/models/applicationUrls'
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
declare var $;

@Component({
  selector: 'app-sports-home',
  templateUrl: './sports-home.component.html',
  styleUrls: ['./sports-home.component.scss']
})
export class SportsHomeComponent implements OnInit {
    @ViewChild('academicBookingModal',{static:false}) academicBookingModal:ElementRef;
  @ViewChild('offlineModal',{static:false}) offlineModal:ElementRef;
  @ViewChild('signinpopup',{static:false}) signinpopup:ElementRef;
 panelExpanded=false;
 panelExpanded2=false;
  constructor(private config: NgbRatingConfig,private restService:RestserviceService,private router:Router) {  config.max = 5;
    config.readonly = true;}
  public latest_date;
  ngOnInit() {
  this.online_avilability_sports();
     
  }

    priceoptions: any = [
    { Value: 1, price: '<500' },
    { Value: 500, price: '500-1500' },
    { Value: 1500, price: '1501-2000' },
    { Value: 2000, price: '>2000' },

  ]

  indoors:string[]=[
    'Boxing','Badminton','Bowling','chess','Carrom','Table Tennis','American'
    ];

 outdoors:string[]=[
    'Cricket','Volleyball','FootBall','Basketball','Hockey'
    ];
 currentRate= 4.5; 
  public appended;
  public showVedic = false;
  public Cricket_show;
  public cricsport: any=[]
  public statewise: any = [];
  public state_show;
  public onlinesport : any = []
  public test: any;
  public selectoptions: any = [];
  public sport;
  public allsport: any = [];
  public vedic;

public live_sportshow:boolean=true
public online_avilability_sports(){
	let url:string = ApplicationUrls.SportsAvailability;
    this.restService.Get(url).subscribe(data=>{
      this.onlinesport=data;
      this.live_sportshow=true;
      console.log('@@@@@',this.onlinesport);
      
      
    });
  }


   public selectedstates = [];
   public stateOption;
   public showIndoor=false;
   public showOutdoor=false;
   public showState = false;
   public showPrice = false;

public indoorfilter: any =[];
sports_type_filter(e){
	let url : string = ApplicationUrls.OnlineIndoorsearch;
   console.log('999999999999999999',e);
if(e.checked){ 
  let obj ={'indoor':e.source.value}
  console.log("obj",obj);
  this.restService.Post(url,obj).subscribe(data => {
      this.indoorfilter = data;
      console.log('@@@@@', this.indoorfilter);
      this.showIndoor = true;
    });       
   }
   else{
     this.showIndoor = false;
   }
   
 }

public outdoorfilter: any =[];
sports_type_filter1(e){
	let url : string = ApplicationUrls.OnlineOutdoorsearch;
   console.log('999999999999999999',e);
if(e.checked){ 
  let obj ={'outdoor':e.source.value}
  console.log("obj",obj);
  this.restService.Post(url,obj).subscribe(data => {
      this.outdoorfilter = data;
      console.log('@@@@@', this.outdoorfilter);
      this.showOutdoor = true;
    });       
   }
   else{
     this.showOutdoor = false;
   }
   
 }



public statedata: any =[];
state_wise_filter(e){
	let url : string = ApplicationUrls.OnlineSportsstatesearch;
   console.log('999999999999999999',e);
if(e.checked){ 
  let obj ={'state':e.source.value}
  console.log("obj",obj);
  this.restService.Post(url,obj).subscribe(data => {
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
	let url : string = ApplicationUrls.OnlineSportspricesearch;
   console.log('999999999999999999',e);
if(e.checked){ 
  let obj ={'price':e.source.value}
  console.log("obj",obj);
  this.restService.Post(url,obj).subscribe(data => {
      this.pricedata = data;
      console.log('@@@@@', this.pricedata);
      this.showPrice = true;
    });       
   }
   else{
     this.showPrice = false;
   }
   
 }

  
states: string[] = [
     'Karanataka', 'Andhra Pradesh', 'Telangana', 'Assam', 'Arunachal Pradesh',
     'Bihar', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Uttar Pradesh', 'West Bengal',
     'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
     'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu','Tripura',
     'Delhi', 'Goa','Pondicherry','Lakshdweep','Daman & Diu','Dadra & Nagar',
     'Chandigarh','Andaman & Nicobar','Uttaranchal','Jharkhand','Chattisgarh'
   ]; 


    public show1:boolean = false;
    public profiledetails;
     booking(data){
           console.log("Astrologer details ",data.first_name);
           this.profiledetails=data;
           $(this.academicBookingModal.nativeElement).modal('show');
            this.show1 = true;
}
booknowSports(data){
   let tokens=localStorage.getItem('token')
   console.log('&&&&&&&&',tokens)
   if(tokens==null){
      $(this.academicBookingModal.nativeElement).modal('hide');
     $(this.signinpopup.nativeElement).modal('show');
   }
   else{
           $(this.academicBookingModal.nativeElement).modal('hide');
             let obj={'date_of_booking':this.latest_date,'mobile_number':data.mobile_number}
             this.restService.changeMessage(obj);
         this.router.navigate(['/user/bookingappoinment']);
   }
 }
offlineBook(){
  $(this.offlineModal.nativeElement).modal('show');
}

 }


