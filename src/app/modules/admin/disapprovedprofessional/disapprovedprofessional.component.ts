import { Component, OnInit,Inject,ViewChild,ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';
import { MatSort,MatSortable,MatTableDataSource } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ApplicationUrls } from '../../../core/models/applicationUrls'
import { Router } from '@angular/router';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
declare var $;
export interface DialogData {
    
}
@Component({
  selector: 'app-disapprovedprofessional',
  templateUrl: './disapprovedprofessional.component.html',
  styleUrls: ['./disapprovedprofessional.component.scss']
})
export class DisapprovedprofessionalComponent implements OnInit {
@ViewChild ('popupDisapproval',{static: false}) popupDisapproval:ElementRef;
  constructor(private router:Router,private restService:RestserviceService) { 
  }
  public searchtext1:any;
  ngOnInit() {
  	this.get_disapproved_profile1();
  }

  public get_disapprovedprofile: any =[];
  get_disapproved_profile1(){
  	let url:string = ApplicationUrls.GetDisapprovedProfile;
    this.restService.Get(url).subscribe(data=> {
        this.get_disapprovedprofile  =  data;
        console.log('------------',this.get_disapprovedprofile);
        
    });
}

 approveAstrologer(data){
   console.log('##################',data);
   let url:String = ApplicationUrls.ApproveAstro;
   let obj={'mobile_number':data}
    this.restService.Post(url,obj).subscribe(data=> {
        this.get_disapproved_profile1();
        
    });
}

disApprovedPopUP(){
 $(this.popupDisapproval.nativeElement).modal('show')
 this.get_disapproved_profile1();
}

}
