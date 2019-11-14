import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidbar',
  templateUrl: './admin-sidbar.component.html',
  styleUrls: ['./admin-sidbar.component.scss']
})
export class AdminSidbarComponent implements OnInit {

 constructor(private router:Router) { }

  ngOnInit() {
  }


goHome(){
  this.router.navigate(['/admin'])
}

manageAppointment(){
  this.router.navigate(['/admin/manage_appointments'])
}

manageProf(){
  this.router.navigate(['/admin/manage_professionals'])
}

regProf(){
  this.router.navigate(['/admin/register_professionals'])
}
payInfo(){
  this.router.navigate(['/admin/admin_payments'])
}

clientpayInfo(){
  this.router.navigate(['/admin/manage_users_pay'])
}

profPayInfo(){
  this.router.navigate(['/admin/manage_professional_pay'])
}

manageClients(){
  this.router.navigate(['/admin/manage_users'])
}
disapproved(){
  this.router.navigate(['/admin/disapproved_professional'])
}

 openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
}


}
