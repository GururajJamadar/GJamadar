import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service'
import { ApplicationUrls } from '../../../core/models/applicationUrls'

declare var $;



@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

@ViewChild('manageclient',{static: false}) manageclient:ElementRef;

  constructor(private restServ:RestserviceService) { }
public searchtext1:any;
public adminlenderedit;
public adminlendersave;
public adminlendercancel;
public rmeditable;

  ngOnInit() {
    this.cilents_details1();
    this.adminlenderedit = true;
   this.adminlendersave = true;
   this.adminlendercancel = true;
   this.rmeditable = "adminnoedit";
  }


       public show1:boolean = false;
       public clientdetail;
  booking(data){
     this.clientdetail=data;
             console.log(this.clientdetail);
             $(this.manageclient.nativeElement).modal('show');
              this.show1 = true;
  }

  public cilents_details:any=[];
 cilents_details1(){
    let url=ApplicationUrls.GET_CLIENTS_DETAILS;
    this.restServ.Get(url).subscribe(data=> {
       console.log('##################',data);
        this.cilents_details  =  data;
        
    });
}

showOtherlenders() {
    console.log('inside showothers');
    this.adminlendersave = false;
    this.adminlendercancel = false;
    this.adminlenderedit = false;
    this.rmeditable = "adminediting";
    
}

showEditlenders() {
    this.adminlendersave = true;
    this.adminlendercancel = true;
    this.adminlenderedit = false;
    this.rmeditable = "adminnoedit";
     
}

public cilents_details2;
saveclientrmdetails(data) {
  let url=ApplicationUrls.SAVE_ADMIN_CLIENT_PROFILE;
  this.cilents_details2 = data;
    console.log(this.cilents_details2);
    this.restServ.Post(url,this.cilents_details2).subscribe(data=> {
           console.log('##################',data);
           alert(data);
           $(this.manageclient.nativeElement).modal('hide');
            
        });
    }


}
