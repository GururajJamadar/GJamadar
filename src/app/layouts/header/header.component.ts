import { Component, OnInit } from '@angular/core';
import {Router,RouterModule, NavigationEnd} from '@angular/router';
import { RestserviceService } from '../../core/Services/RestService/restservice.service';
import { ApplicationUrls } from '../../core/models/applicationUrls';
import { LoginService } from '../../core/Services/LoginService/login.service'
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private restServ:RestserviceService,private service:LoginService) { }

public logi:boolean=true;
public logoutt:boolean=true;
public sigup:boolean=true;
public Home:any;
public data:any;

current_user: any = 0;
  ngOnInit() {

this.service.current_user.subscribe((data: any) => {
      this.current_user = data;
      console.log('hiiiiiiiiiiiiiiii', data);
    });
  	this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
      	console.log("urllllllllllll",event.url);
       
     if((event.url == '/registration/login') || (event.url == '/registration/signup')) 
        {
        this.logoutt=false;
        this.logi=true;
        this.sigup=true;
        }
        else 
        {
        this.logoutt=true;
        this.logi=false;
        this.sigup=false;
       
        }
      }
    })
  }

      closeMenu(a:string) {
        $(document).on('click', function () {
          $('.collapse').collapse('hide');
        })
        if(a == 'Signup'){
          // alert(123);
      let clearr = localStorage.removeItem('popups');
          let popups = localStorage.getItem("popup");
          
          
          console.log("###",popups,clearr)
              if((popups == null) || (popups !== 'clearr')){

              localStorage.setItem("popup", "Open");
              this.router.navigate(['/'])
              }
        }
      };

  logoutuser(data){
    this.service.changeCurrentUser('0');
    this.service.logout11(data).subscribe(
      backendres => {
        console.log("response from backend", backendres);
        localStorage.clear();
        this.router.navigate(['/registration/login'])
      })
}
}
