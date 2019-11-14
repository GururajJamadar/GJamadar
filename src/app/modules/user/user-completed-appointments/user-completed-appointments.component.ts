import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-user-completed-appointments',
  templateUrl: './user-completed-appointments.component.html',
  styleUrls: ['./user-completed-appointments.component.scss']
})
export class UserCompletedAppointmentsComponent implements OnInit {
currentPage = 1;
itemsPerPage = 5;
pageSize: number;

  constructor( private restService:RestserviceService) { }


  ngOnInit() {
    console.log("ssssss");
       this.bookingpendingdetails();
  }
  
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;  
    this.reverse = !this.reverse;
}
public filter:any;
public completedapts=[];
public pendingapts=[];
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
                        console.log(this.completedapts);
                       
                    } 
        }
        }       
    });
}





 public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }
  
  public changePagesize(num: number): void {
  this.itemsPerPage = this.pageSize + num;
}
}
