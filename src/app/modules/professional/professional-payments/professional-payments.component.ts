import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { RestserviceService} from '../../../core/Services/RestService/restservice.service'
import { ApplicationUrls } from '../../../core/models/applicationUrls';


@Component({
  selector: 'app-professional-payments',
  templateUrl: './professional-payments.component.html',
  styleUrls: ['./professional-payments.component.scss']
})
export class ProfessionalPaymentsComponent implements OnInit {
 events: string[] = [];
   date = new FormControl(new Date());
     serializedDate = new FormControl((new Date()).toISOString());
 addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
   dataSource = ELEMENT_DATA;
columnsToDisplay = ['Account Number', 'Bank Name', 'Branch'];
  expandedElement: PeriodicElement;




  constructor(private restService:RestserviceService) { }

  ngOnInit() {
    // this.paymentstatements();
  }
  public details;
  public searchtext = '';
  	public selectdate:any={};

paymentstatements(data){
  console.log("kkkkkkkkkkkkkkkk",data['startdate'].toString().slice(0,24));
  let stdate = data['startdate'].toString().slice(0,24)
  let edate = data['enddate'].toString().slice(0,24)
  let finaldata = {"start":stdate,"end":edate}
  let url:string= ApplicationUrls.VIEW_PAYMENT_HISTORY
  this.restService.Post(url,finaldata).subscribe(data =>{
    console.log("gggggggggggggg",data)
    this.details = data;
   
  })
}
}
export interface PeriodicElement {
  AccountNumber: string;
  BankName: string;
  Branch: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
{
    AccountNumber: '',
    BankName: '',
    Branch: ''
    },
];








