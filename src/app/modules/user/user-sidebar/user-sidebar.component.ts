import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {

 
  constructor(private router:Router) { }

  ngOnInit() {
  }


goHome(){
  this.router.navigate(['/user'])
}

completedAppointment(){
  this.router.navigate(['/user/user_completed_appointments'])
}

pendingAppointment(){
  this.router.navigate(['/user/user_pending_appointments'])
}

userprofile(){
  this.router.navigate(['/user/user_profile'])
}
userpay(){
  this.router.navigate(['/user/user_pay'])
}

// clientpayInfo(){
//   this.router.navigate(['/user/manage_users_pay'])
// }

// profPayInfo(){
//   this.router.navigate(['/user/manage_professional_pay'])
// }

// manageClients(){
//   this.router.navigate(['/user/manage_users'])
// }
// disapproved(){
//   this.router.navigate(['/user/disapproved_professional'])
// }

 openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
}
}
