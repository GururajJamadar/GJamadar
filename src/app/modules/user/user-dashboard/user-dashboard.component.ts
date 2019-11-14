import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { RestserviceService} from '../../../core/Services/RestService/restservice.service';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
declare var $;
// import { DatePipe } from '@angular/common';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { UserCompletedAppointmentsComponent } from '../user-completed-appointments/user-completed-appointments.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
	currentRate= 5;
  public rate=1;
public livedata:any=[];
constructor(private config: NgbRatingConfig, private router:Router,public dialog: MatDialog,public restService:RestserviceService) { 
    config.max = 5;
    config.readonly = true;}

 

  @ViewChild('clientbooking2',{static: false}) clientbooking2:ElementRef;
  @ViewChild('rescheduleappointment',{static: false}) rescheduleappointment:ElementRef;
  @ViewChild('reschedule',{static: false}) reschedule:ElementRef;


  public details;
public orderdata;
public latest_date;
  ngOnInit() {
  	 this.online_avilability();
    this.online_avilability_allprofessionals();


    let date = new Date();
         let latest_date1=date;
         this.latest_date=latest_date1
         console.log('&&&&&&&&*****88888888888888888888',latest_date1);

  }
  public popdata;
public pendingapts; 
public booked_dat;
public b;
public onlineteachers;
public onlinelifestyle;
public onlinechef;
public onlinesports;
public completedapts=[];
 public bookingdata: any = {};



bookingpendingdetails(){
     // $(this.appoint.nativeElement).modal('show');
     let url=ApplicationUrls.GET_BOOKING_DETAIL;
    this.restService.Get(url).subscribe(data=> {
       this.pendingapts  =  data.serialized;
       console.log('---',this.pendingapts)
               if(this.pendingapts){
                for (let i = 0; i < this.pendingapts.length; i++) {
                    if (this.pendingapts[i].status == "completed") {
                        this.completedapts.push(this.pendingapts[i]);
                    } 
        }
        }       
    });
}


rescheduleapt(){
	let today = new Date();
   let todaydate=today;
   console.log('hhhhhhhhhhhhhhh',todaydate);
   
    let url=ApplicationUrls.GET_BOOKING_DETAIL;
    this.restService.Get(url).subscribe(data=> {
        this.pendingapts  =  data.serialized;
                for (let i = 0; i < this.pendingapts.length; i++) {
                   if ((this.pendingapts[i].date_of_booking < todaydate)){
                        this.popdata = this.pendingapts[i];
                        $(this.rescheduleappointment.nativeElement).modal('show');
                        console.log('-------------',this.pendingapts[i])
                    }
                 }     
            });
         }

public rescheduled_data;
reschedule_appoint1(data){
  console.log(data)
        this.rescheduled_data = data;
        console.log(this.rescheduled_data);
          let url=ApplicationUrls.ADD_MONEY_TOWALLET;
        this.restService.Post(url,data).subscribe( respback =>{
          $(this.reschedule.nativeElement).modal('show');
          console.log('hhhhhhhhh',respback);
})
      }

    public onlineavil;
    online_avilability(){
    	console.log("i am inside service");
    	let url=ApplicationUrls.ONLINEASTROAVILABLE;
    this.restService.Get(url).subscribe(data=>{
      this.onlineavil=data;
      console.log('astro',this.onlineavil);
    });
  }

 public show1:boolean = false;
    public profiledetails;
     booking10(data){
           console.log("Astrologer details ",data.first_name);
           this.profiledetails=data;
           this.restService.bookingdata=data;
           console.log('%%%%%%%%%',this.profiledetails)
           $(this.clientbooking2.nativeElement).modal('show');
            this.show1 = true;
}
booknow(data){
   let tokens=localStorage.getItem('token')
   console.log('&&&&&&&&',tokens)
   if(tokens==null){
      $(this.clientbooking2.nativeElement).modal('hide');
     
   }
   else{
           $(this.clientbooking2.nativeElement).modal('hide');
             let obj={'date_of_booking':this.latest_date,'mobile_number':data.mobile_number}
             localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId",JSON.stringify(obj));
this.router.navigate(['/user/bookingappoinment']);
   }
 }
 bookappointment(data,date){
   $(this.clientbooking2.nativeElement).modal('hide');
  console.log('!!!!!!!!!!!!!!!!!!!!!!',this.latest_date);
  let obj={'date_of_booking':this.latest_date,'mobile_number':data.mobile_number,'video_prize':data.video_price}
  localStorage.removeItem("editUserId");
  localStorage.setItem("editUserId",JSON.stringify(obj));
  this.router.navigate(['/user/bookingappoinment']);
}

public online_avilability_allprofessionals()
{
	console.log("i am in service login data");
	let url=ApplicationUrls.ONLINEALLTYPEAVILABLITY;
  this.restService.Get(url).subscribe(data=>{
    this.livedata=data;  
    console.log('PPPPPPPPPPPPPPPP',data);  
  });

}


}
