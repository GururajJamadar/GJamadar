import { Component, OnInit } from '@angular/core';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service'
import { ApplicationUrls } from '../../../core/models/applicationUrls'

@Component({
  selector: 'app-manage-users-payments',
  templateUrl: './manage-users-payments.component.html',
  styleUrls: ['./manage-users-payments.component.scss']
})
export class ManageUsersPaymentsComponent implements OnInit {

  constructor(private restServ:RestserviceService) { }
  public searchtext1:any;
  ngOnInit() {
  	this.clientPaymentInfo();
  }

public clientPaydata=[];
  clientPaymentInfo(){
  	let url=ApplicationUrls.CLIENT_PAYMENT_INFO;
  	this.restServ.Get(url).subscribe(data=>{
    console.log("client paymentsssss",data);
    this.clientPaydata=data;
  	});
  }

}
