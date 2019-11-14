  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service'
import { ApplicationUrls } from '../../../core/models/applicationUrls';

@Component({
  selector: 'app-professional-sidebar',
  templateUrl: './professional-sidebar.component.html',
  styleUrls: ['./professional-sidebar.component.scss']
})
export class ProfessionalSidebarComponent implements OnInit {

  constructor(private router:Router, private restServ:RestserviceService) { }

  ngOnInit() {
    this.get_onlinestatus1();
   
  }
 


goHome(){
  this.router.navigate(['/professional'])
}

professionalCompleted(){
  this.router.navigate(['/professional/professional_completed_appointments'])
}

professionalPending(){
  this.router.navigate(['/professional/professional_pending_appointments'])
}

professionalPay(){
  this.router.navigate(['/professional/professional_pay'])
}
professionalProfile(){
  this.router.navigate(['/professional/professional_profile'])
}

public status;
public data;
public btncol:any;

gotocontroller (number) {
  let url=ApplicationUrls.TOGGLE_PROFESSIONAL;

  console.log('@@@@@@@@@@@@@',number)
        if (number == 1) {
            this.status = false;
            var condition = 'FALSE';
        } else if (number == 2) {
           this.status = true;
            var condition = 'TRUE';
        }
        this.data = {'status':condition}
        console.log("status", this.data);
        this.restServ.Post(url,this.data).subscribe(result => {
        console.log("STATUS",result);
    });
        
    }

    get_onlinestatus1(){
      let url = ApplicationUrls.GET_ONLINESTATUS;
       this.restServ.Get(url).subscribe(result => {
                  console.log('ppppp---------',result)

         this.status=result[0].status;
         console.log('ppppp---------',this.status)
      
    });

    }

 openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
}


}
