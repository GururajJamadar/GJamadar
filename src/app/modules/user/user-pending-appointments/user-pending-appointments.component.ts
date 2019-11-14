import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { RestserviceService} from '../../../core/Services/RestService/restservice.service';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { WebrtcComponent } from '../../../layouts/webrtc/webrtc.component';
declare var $;
import {Router} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-user-pending-appointments',
  templateUrl: './user-pending-appointments.component.html',
  styleUrls: ['./user-pending-appointments.component.scss']
})
export class UserPendingAppointmentsComponent implements OnInit {

  constructor(private restService:RestserviceService ,private router:Router) { }
  @ViewChild('cancelappointment',{static: false}) cancelappointment:ElementRef;
 //   @ViewChild('updatesucess1',{static: false}) updatesucess1:ElementRef;
 // @ViewChild('updatesucess2',{static: false}) updatesucess2:ElementRef;
  
  ngOnInit() {
      this.bookingappointment_completeddetails();
  }

  public orderdetails;
  public pendingapts=[];
  public pendingapts1=[];
  public totalcount;
bookingappointment_completeddetails(){
   let url=ApplicationUrls.GET_BOOKING_DETAIL;
    this.restService.Get(url).subscribe(data=> {
        this.pendingapts.push(data.serialized);
        this.pendingapts=data.serialized;
        console.log(',,,,,,,,,,,',this.pendingapts)
              if(this.pendingapts){
                for (let i = 0; i < this.pendingapts.length; i++) {
                   if (this.pendingapts[i].status == "Pending" && this.pendingapts[i].payment_status == "Success") {
                        this.pendingapts1.push(this.pendingapts[i]);
                    }
                } 
                }    
            });
         }
public mybooking_data;
confirm_cancelappointment(data){
  this.mybooking_data=data;
      $(this.cancelappointment.nativeElement).modal('show');
}
reschedule_appoint(data){
      let url=ApplicationUrls.ADD_MONEY_TOWALLET;

        this.restService.Post(url,data).subscribe( respback => {
      console.log("the data from the backend",respback);
      $(this.cancelappointment.nativeElement).modal('hide');
       // this.bookingappointment_completeddetails();
      this.router.navigate(['/user/'])
     
    })
}

videomode(data){
  // this.caller.openvideo(123456);
  console.log("dataaaaaaaaaaaaaaaaaaa###########",data.order_id);
          // this.restService.changeMessage1(data)
          // let orderdetails = {oId: data.order_id}
          // this.restService.videocallOrderId = data;
          localStorage.setItem('orderDetails', data.order_id)
          // console.log("hhhhhhhhhhhhh", this.restService.orderdetails);
          this.router.navigate(['/webrtc'])

}

videotime(){
   let url=ApplicationUrls.GET_BOOKING_DETAIL;
   this.restService.Get(url).subscribe(data=> {
        this.pendingapts  =  data.serialized;
                console.log('---------------',this.pendingapts)
                this.pendingapts1 = [];
                for (let i = 0; i < this.pendingapts.length; i++) {
                    if (this.pendingapts[i].status == "Pending") {
                        this.pendingapts1.push(this.pendingapts[i]);
                        this.totalcount=this.pendingapts1.length;
                        this.restService.pendindingappoint= this.pendingapts1;    
                    } 
                }  
        
      });       
}


videotime11(){
                this.pendingapts1 = [];
                console.log(this.pendingapts.length);
                if(this.pendingapts.length != 1 ){
                 
                  for (let i = 0; i < this.pendingapts.length; i++) {
                    if (this.pendingapts[i].status == "Pending") {
                        this.pendingapts1.push(this.pendingapts[i]);
                        this.totalcount=this.pendingapts1.length;     
                    } 
                } 
                for (let i = 0; i < this.pendingapts1.length; i++){
                  var a=this.pendingapts1[i]['datetime_difference']-1
                  var days=Math.floor(a/(3600*24))
                  var hours=Math.floor((a%(3600*24))/3600);
                  var mins=Math.floor(((a%(3600*24))%3600)/60)
                  var seconds = Math.floor((((a%(3600*24))%3600)%60)%60)
                  this.pendingapts1[i]['datetime_difference1']=days+"days"+" "+hours+":"+mins+":"+seconds
                  console.log(Math.round(hours),Math.round(mins),Math.round(seconds), this.pendingapts1[i]['datetime_difference1'],this.pendingapts1[i]['datetime_difference'])
                  this.pendingapts1[i]['datetime_difference'] = a
                  console.log("@@@@@@@", this.pendingapts1[i]['datetime_difference']);
      
                }
                }
              else{

              }
       
            
 }

}
