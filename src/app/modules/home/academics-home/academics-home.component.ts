import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {NgForm} from '@angular/forms';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
declare var $;
@Component({
  selector: 'app-academics-home',
  templateUrl: './academics-home.component.html',
  styleUrls: ['./academics-home.component.scss']
})
export class AcademicsHomeComponent implements OnInit {
	@ViewChild('academicBookingModal',{static:false}) academicBookingModal:ElementRef;
	@ViewChild('offlineModal',{static:false}) offlineModal:ElementRef;
	@ViewChild('signinpopup',{static:false}) signinpopup:ElementRef;
public onlineavil2: any = [];
	currentRate= 5; 
	public panelExpanded:any; 
	public panelExpanded1:any;
	public panelExpanded2:any;
	public panelExpanded3:any;

	constructor(private config: NgbRatingConfig,private router:Router,private restServ:RestserviceService) {
	config.max = 5;
    config.readonly = true;}

      public latest_date;
	    ngOnInit() {
	      this.online_avilability_tutors();
	    }

	  public online_avilability_tutors(){
	  	let tutoUrl=ApplicationUrls.ONLINE_ACADEMICS_AVAILABLE;
	    this.restServ.Get(tutoUrl).subscribe(data=>{
	      this.onlineavil2=data;
	      console.log('@@@@@',this.onlineavil2);
	    });
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
     booking10(data){
           console.log("Astrologer details ",data.first_name);
           this.profiledetails=data;
           $(this.academicBookingModal.nativeElement).modal('show');
            this.show1 = true;
}
booknow(data){
   let tokens=localStorage.getItem('token')
   console.log('&&&&&&&&',tokens)
   if(tokens==null){
      $(this.academicBookingModal.nativeElement).modal('hide');
     $(this.signinpopup.nativeElement).modal('show');
   }
   else{
           $(this.academicBookingModal.nativeElement).modal('hide');
             let obj={'date_of_booking':this.latest_date,'mobile_number':data.mobile_number}
             this.restServ.changeMessage(obj);
        this.router.navigate(['/user/bookingappoinment']);
   }
 }
offlineBook(){
	$(this.offlineModal.nativeElement).modal('show');
}


}
