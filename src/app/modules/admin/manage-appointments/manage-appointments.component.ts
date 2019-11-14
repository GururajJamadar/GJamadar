import { Component, OnInit } from '@angular/core';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service'
import { ApplicationUrls } from '../../../core/models/applicationUrls'
@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.scss']
})
export class ManageAppointmentsComponent implements OnInit {

  constructor(private restServ:RestserviceService) { }
  public searchText1:any;
  ngOnInit() {
  	this.fetchingDetails()

  }
  public appointdata:any=[];
  fetchingDetails(){
  	let url:string = ApplicationUrls.MANAGEAPPOINTMENT;
  	this.restServ.Get(url).subscribe(data=>{
  		this.appointdata=data;
  		console.log('helllllllo',data);
  	})
  }
}
