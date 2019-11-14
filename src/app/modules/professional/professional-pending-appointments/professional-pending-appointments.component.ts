import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { HttpClient } from  '@angular/common/http';
import {Router} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
declare var $;
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { WebrtcComponent } from '../../../layouts/webrtc/webrtc.component'



@Component({
  selector: 'app-professional-pending-appointments',
  templateUrl: './professional-pending-appointments.component.html',
  styleUrls: ['./professional-pending-appointments.component.scss']
})
export class ProfessionalPendingAppointmentsComponent implements OnInit {
  @ViewChild('WebrtcComponent',{static:false}) WebrtcComponent:WebrtcComponent;
  constructor(private datePipe:DatePipe,private restService:RestserviceService,public router:Router) { }
    @ViewChild('cancelappointment',{static:false}) cancelappointment:ElementRef;

    public counter :any;
    public future;

  ngOnInit() {

       this.bookingappointment_pendingdetails();
  }
  public buttonhide:boolean;
  public pendingapts=[];
  public pendingapts1=[];
  public totalcount;
  public interval;
  


  bookingappointment_pendingdetails(){
     // $(this.appoint.nativeElement).modal('show');
     let url=ApplicationUrls.GET_PROFESSIONAL_APPOINT_DETAIL;
    this.restService.Get(url).subscribe(data=> {
       this.pendingapts  =  data.serialized;
       console.log('---',this.pendingapts)
               if(this.pendingapts){
                 // alert(this.pendingapts);
                for (let i = 0; i < this.pendingapts.length; i++) {
                    if (this.pendingapts[i].status == "Pending" && this.pendingapts[i].payment_status == "Success") {
                        this.pendingapts1.push(this.pendingapts[i]);
                        console.log("777777777",this.pendingapts1)
                    } 
        }
        }       
    });
}

videomode(data){
  // this.caller.openvideo(123456);
  console.log("dataaaaaaaaaaaaaaaaaaa",data.order_id);
          this.restService.orderdetails = data;
          this.router.navigate(['/webrtc'])

}

videocall1(data): void {
  console.log("dataaaaaaaaaaaaaaaaaaa",data.order_id);
          this.restService.orderdetails = data;
        this.router.navigate(['/webrtc'])
         
}

videotime(){
    let url=ApplicationUrls.GET_PROFESSIONAL_APPOINT_DETAIL;
    this.restService.Get(url).subscribe(data=>{
        this.pendingapts  =  data.serialized;
                this.pendingapts1 = [];
                for (let i = 0; i < this.pendingapts.length; i++) {
                    if (this.pendingapts[i].status == "Pending") {
                        this.pendingapts1.push(this.pendingapts[i]);
                        this.totalcount=this.pendingapts1.length;     
                    } 
                }  
      });       
 }

videotime11(){
                this.pendingapts1 = [];
                for (let i = 0; i < this.pendingapts.length; i++) {
                    if (this.pendingapts[i].status == "Pending") {
                        this.pendingapts1.push(this.pendingapts[i]);
                        this.totalcount=this.pendingapts1.length;     
                    } 
                }  
        console.log("timmeee", this.pendingapts1);
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
public mybooking_data;
confirm_cancelappointment(data){
  this.mybooking_data=data;
      $(this.cancelappointment.nativeElement).modal('show');
}
 reschedule_appoint(data){
   let url:String = ApplicationUrls.ADD_MONEY_TOWALLET;
        this.restService.Post(url,data).subscribe( respback => {
      console.log("the data from the backend",respback);
      $(this.cancelappointment.nativeElement).modal('hide');
      this.router.navigate(['/professional'])
     
    })
}


 
}
     
