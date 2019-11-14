import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { MatCheckboxModule } from '@angular/material/checkbox';
declare var $;

@Component({
  selector: 'app-astro-home',
  templateUrl: './astro-home.component.html',
  styleUrls: ['./astro-home.component.scss']
})
export class AstroHomeComponent implements OnInit {
 @ViewChild('clientbooking2',{static:false}) clientbooking2:ElementRef;
  @ViewChild('signinpopup',{static:false}) signinpopup:ElementRef;
public selection:any;
public selection1:any;
public selection2:any;
public selection3:any;
  constructor(private config: NgbRatingConfig,private router:Router,private restserv:RestserviceService, ) { 
    config.max = 5;
    config.readonly = true;
  }

  public latest_date;
  ngOnInit() {
    this.online_avilability_astrologer();
    let date = new Date();
         let latest_date1=date;
         this.latest_date=latest_date1
         console.log('&&&&&&&&*****88888888888888888888',latest_date1)
  }
  currentRate= 5;   
states: string[] = [
    'Karanataka', 'Andhra Pradesh', 'Telangana', 'Assam', 'Arunachal Pradesh',
    'Bihar', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Uttar Pradesh', 'West Bengal',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu','Tripura',
    'Delhi', 'Goa','Pondicherry','Lakshdweep','Daman & Diu','Dadra & Nagar',
    'Chandigarh','Andaman & Nicobar','Uttaranchal','Jharkhand','Chattisgarh'
  ];
  // For online astrologers
public liveastr;
public totalcount;
    online_avilability_astrologer(){
    	let astroUrl=ApplicationUrls.ONLINE_ASTRO_AVAILABLE;
    this.restserv.Get(astroUrl).subscribe(data=>{
    this.liveastr=data;
    this.totalcount = this.liveastr.length;
    console.log('online astros',this.liveastr);
    });
  }

  public checkedStates = [];
  public state: any;
  public areaofexpertize=[];
  public vedicAstro = [];
  public showState = false;


  public selectedstates=[];
  checkedToChange(ee){
      console.log("fdddddddddddddddd",(ee));
      console.log("fdddddddddddddddd",this.liveastr);
      if (ee){
        let id=this.selectedstates.indexOf(ee);
        for(let i=0;i<this.liveastr.length;i++){
       console.log("oneeeeeeeeeeeeeeeee",(this.liveastr[i].state));      
          if(this.liveastr[i].state == ee){
             let idx = this.checkedStates.indexOf(this.liveastr[i]);
                if (idx > -1) {
                    this.checkedStates.splice(idx, 1);
                    if (this.checkedStates.length==0){
                       this.showState=false;
                    }else{
                        this.showState = true;
                    }
                } else {
                    this.checkedStates.push(this.liveastr[i]);
                    console.log("after push")
                    this.showState = true;
                }
          }
          else if(this.checkedStates.length==0){
            console.log("else if")
             this.showState = true;
          }
        }
        if (id>-1){
          this.selectedstates.splice(id,1);
          if(this.selectedstates.length==0){
            this.online_avilability_astrologer();
            this.showState=false;
          }
          else{
            this.showState=true;
          }
        }else{
          this.selectedstates.push(ee)
          this.showState=true;
        }
      }
      else{
        this.showState = false;
      }
      
    }

//new filter code dnt remove 

public astrologytypes = [
      {checked:false,status:'Vedic'},
      {checked:false,status:'Fengshui'}, 
      {checked:false,status:'Tarot'},
      {checked:false,status:'Numerology'},
      {checked:false,status:'Vaastu'}
     ]


public showVedic:any
 name:string;
  filterArr = [];
  filterArr1 = [];
   filterArr2 = [];
   todaysAppointments = this.liveastr;
  todaysapp= [];;
  test1:boolean = true;
 //filter 2nd
  test2:boolean = true;
  updateFilter1(appt:any) {
  	let searchUrl=ApplicationUrls.ONLINE_SEARCH_ASTROLOGER;
    console.log(appt,"testttttttttttt");
    if(appt.checked) {
      this.filterArr1.push(appt.status)
            this.filterArr2.push({name:appt.status})
       console.log("testtttttt",this.filterArr1);
       console.log("testtttttt",this.filterArr2);
       
       let obj={'area_of_expertise':this.filterArr1}
       this.restserv.Post(searchUrl,obj).subscribe(data=>{
       this.liveastr=data;

       this.liveastr=data;
       console.log("QQQQQQQQQQQ",this.liveastr);
       this.totalcount = this.liveastr.length;
    })
     }
      // unchecked
    else {

      for(let order of this.filterArr2){
        console.log(appt.status)
        if(order.name == appt.status){
         let obj= this.filterArr1.splice(this.filterArr1.indexOf(appt.status),1);
          console.log('&&&&&&&&&&77',this.filterArr1);

       this.restserv.Post(searchUrl,{'area_of_expertise':this.filterArr1}).subscribe(data=>{
      this.liveastr=data;
    
        })
       break;
     }
      }
  }
 }
    public show1:boolean = false;
    public profiledetails;
     booking10(data){
           console.log("Astrologer details ",data.first_name);
           this.profiledetails=data;
           $(this.clientbooking2.nativeElement).modal('show');
            this.show1 = true;
}
   booknow(data){
   let tokens=localStorage.getItem('token')
   console.log('&&&&&&&&',tokens)
   if(tokens==null){
   ;
      $(this.clientbooking2.nativeElement).modal('hide');
     $(this.signinpopup.nativeElement).modal('show');
   }
   else{

           $(this.clientbooking2.nativeElement).modal('hide');
        
             let obj={'date_of_booking':this.latest_date,'mobile_number':data.mobile_number}
             this.restserv.changeMessage(obj);
            
     this.router.navigate(['/user/bookingappoinment']);
  
        
   }
 }
}
