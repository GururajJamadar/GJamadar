import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { RestserviceService} from '../../../core/Services/RestService/restservice.service'
import { ApplicationUrls } from '../../../core/models/applicationUrls';

@Component({
  selector: 'app-professional-completed-appointments',
  templateUrl: './professional-completed-appointments.component.html',
  styleUrls: ['./professional-completed-appointments.component.scss']
})
export class ProfessionalCompletedAppointmentsComponent implements OnInit {

   constructor(private restService:RestserviceService) { }
@ViewChild('appoint',{static:false}) appoint:ElementRef;
  ngOnInit() {
  	this.bookingappointmentsdetails();
  }
  searchname:any;
  currentPage = 1;
itemsPerPage = 5;
pageSize: number;
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  public copleted_apts=[];
  public completedapts=[];
  public totalcount;
  public mybooking:any;

  bookingappointmentsdetails(){
  	let url=ApplicationUrls.GET_PROFESSIONAL_APPOINT_DETAIL;
    this.restService.Get(url).subscribe(data=> {
        this.copleted_apts  =  data.serialized;
        console.log('--------------',this.copleted_apts)
                if(this.copleted_apts){
                for (let i = 0; i < this.copleted_apts.length; i++) {
                    if (this.copleted_apts[i].status == "completed") {
                        this.completedapts.push(this.copleted_apts[i]);
                        this.totalcount=this.completedapts.length;
                
                    } 
                    
                }
                console.log("GGGFGFGFGFGFG",this.completedapts)
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
