import { Component, OnInit, Inject,ViewChild,ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';
import { MatSort,MatSortable,MatTableDataSource } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';;
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { Router } from '@angular/router';
declare var $;
export interface DialogData {
   
 
}
@Component({
  selector: 'app-registerprofessionals',
  templateUrl: './registerprofessionals.component.html',
  styleUrls: ['./registerprofessionals.component.scss']
})
export class RegisterprofessionalsComponent implements OnInit {
	@ViewChild('registerastro',{static: false}) registerastro:ElementRef;

  constructor(public dialog: MatDialog,private router:Router,private restService:RestserviceService) { }
 public searchtext1:any;
 public adminastroedit;
 public adminastrosave;
 public adminastrocancel;
 public rmeditable;
 public showastropic;
 public uploadastrodocs;
 public reviewastrodocs;
 public uploadastropic;

  ngOnInit(){
 this.getRegisteredAstro1();
 this.adminastroedit = true;
 this.adminastrosave = false;
 this.adminastrocancel = false;
 this.rmeditable = "adminnoedit";
 this.showastropic = true;
 this.uploadastrodocs = true;
 this.reviewastrodocs = false;
   }

 showOtherastrologers() {
     console.log('inside showothers');
     this.adminastrosave = false;
     this.adminastrocancel = false;
     this.adminastroedit = false;
     this.rmeditable = "adminediting";
     this.showastropic = false;
     this.uploadastropic = true;
     this.uploadastrodocs = false;
     this.reviewastrodocs = true;
 }

 showEditastrologers() {
     this.adminastrosave = false;
     this.adminastrocancel = false;
     this.adminastroedit = true;
     this.rmeditable = "adminnoedit";
     this.showastropic = true;
     this.uploadastropic = false;
     this.uploadastrodocs = true;
     this.reviewastrodocs = false;

 }
 public show1:boolean = false;
 public registerdetail;
 booking(data){
    
            this.registerdetail=data;
            console.log(this.registerdetail);
            $(this.registerastro.nativeElement).modal('show');
             this.show1 = true;
 }


 

  public registeredastro;
  public registeredastro_length;
    getRegisteredAstro1(){
    let url:string = ApplicationUrls.GetRegisteredAstrologer;
    this.restService.Get(url).subscribe(data=> {
    console.log('@@@@',data);
    this.registeredastro  =  data;
    this.registeredastro_length=this.registeredastro.length;
    console.log("this count data");
    });
}

disapproveastro(data){
   console.log('##################',data);
   let url:string = ApplicationUrls.DisapproveAstrologer;
   let obj={'mobile_number':data}
    this.restService.Post(url,obj).subscribe(data=> {
       this.getRegisteredAstro1(); 
    });
}


}
