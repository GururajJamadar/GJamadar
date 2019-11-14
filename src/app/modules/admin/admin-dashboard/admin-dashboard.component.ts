import { Component, OnInit } from '@angular/core';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { Router } from '@angular/router';
import { ApplicationUrls } from '../../../core/models/applicationUrls'
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private restService:RestserviceService,private router:Router) { }


  ngOnInit() {
     this.getCounts();
  }
public count :any =[];
public astro_count :any =[];
  getCounts(){
    let url:string = ApplicationUrls.AdminCount;
    this.restService.Get(url).subscribe(data=> {
      console.log('@@@@@@@@@',data);
        this.count  =  data;
        // this.astro_count=this.count.astro_count;
        console.log("this count data",data);
    });
}
goManage(){
    this.router.navigate(['/admin/manage_professionals']); 

  }
  goRegistered(){
    this.router.navigate(['/admin/register_professionals']); 

  }
 
  goManageclients(){
    this.router.navigate(['/admin/manage_users']); 

  }
  goManageappointments(){
    this.router.navigate(['/admin/manage_appointments']); 

  }
  goPaymentinfo(){
    this.router.navigate(['/admin/manage_users_pay']); 
  }
  disapproved(){
  this.router.navigate(['/admin/disapproved_professional'])
  }

}

