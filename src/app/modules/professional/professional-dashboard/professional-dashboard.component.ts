import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material';
import {FormControl} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { RestserviceService} from '../../../core/Services/RestService/restservice.service'
declare var $;
import { Observable } from 'rxjs';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';


@Component({
	selector: 'app-professional-dashboard',
	templateUrl: './professional-dashboard.component.html',
	styleUrls: ['./professional-dashboard.component.scss']
})
export class ProfessionalDashboardComponent implements OnInit {
      	 events: string[] = [];
   date = new FormControl(new Date());
addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  
  }

	

  constructor(private datePipe: DatePipe,private restService:RestserviceService) { }
  
public selectedDate = this.date.value;
public latest_date;
  ngOnInit() {
    this.proff_dashboardappintment(0);
    this.selectedDate = this.date.value;
    let date = new Date();
         let latest_date1=this.datePipe.transform(date,"yyyy-MM-dd")
   console.log(latest_date1);
   this.onSelect(latest_date1);
   
   

  }
	public pendinglist;
public completedlist=[];
  onSelect(event){
    console.log(event,this.date);
    this.selectedDate = event;
     let latest_date1=this.datePipe.transform(this.selectedDate,"yyyy-MM-dd")
    console.log(latest_date1);
    this.latest_date=latest_date1;
    let obj={'date1': this.latest_date}
        console.log('ooooooooooooooooooooooooooooooooooooooooo',obj);
}

      proff_dashboardappintment(obj){
   
    let url= ApplicationUrls.GET_PROFESSIONAL_APPOINT_DETAIL;
    return this.restService.Post(url,obj).subscribe(data=> {
       console.log('---@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',data);
      
       this.completedlist=data;
       console.log("HDHSDHSDHSADSAHDSAD",this.completedlist)
     });

    }

 }