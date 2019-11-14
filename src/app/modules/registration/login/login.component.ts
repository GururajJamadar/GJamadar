import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl,FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { LoginService } from '../../../core/Services/LoginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  log=false;

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  constructor(private formBuilder: FormBuilder,private loginService:LoginService,private restService:RestserviceService, private router:Router) { 
  }
  public userdata = {};
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  
  get f() { return this.loginForm.controls; }
  
  private user: any;
  private token:any;
  public error_message:any ;
  public recalll(data){
    this.loginService.changeCurrentUser(data);
    
  }
  formdata:any;
  loginUser(loginForm): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("in component dataaa",loginForm.value);
    let url:string = ApplicationUrls.USER_LOGIN;
    
    this.formdata = loginForm.value;

    this.restService.Post(url,this.formdata).subscribe( data => {
      console.log('@@@@@@@@@@',data);

      console.log("@!@!@!@!!!!!!!!!!",data['role'])
       localStorage.setItem('token',data['token']);

      
      if(data.role == 'Admin'){
        this.recalll(data);
        this.log=true;
        this.user= data.role;
        this.token = data.token;
        localStorage.setItem('user', this.user,);
        this.router.navigate([`./admin/`]);
        
        
      } 
      else if(data.role == 'Academics'){
        this.recalll(data);
        this.user= data.role;
        this.token = data.token;
        //localStorage.setItem('token', this.token);
        localStorage.setItem('user', this.user,);
        this.router.navigate([`./professional/`]);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        
        
      } 
      else if(data.role == 'client'){
        this.recalll(data);
        this.user= data.role;
        this.token = data.token;
       // localStorage.setItem('token', this.token);
        localStorage.setItem('user', this.user,);
        this.router.navigate([`./user/`]);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        
        
      } 
      else if(data.role == 'Astrologer'){
        this.recalll(data);
        this.user= data.role;
        this.token = data.token;
        console.log(this.token);
        localStorage.setItem('user', this.user,);
        this.router.navigate([`./professional/`]);
      //  localStorage.setItem('token', this.token); 
      } 
      else if(data.role == 'Sports'){
        this.recalll(data);
        this.user= data.role;
        this.token = data.token;
        console.log(this.token);
        localStorage.setItem('user', this.user,);
        this.router.navigate([`./professional/`]);
     //   localStorage.setItem('token', this.token); 
      } 
      else if(data.role == 'LifeStyle'){
        this.recalll(data);
        this.user= data.role;
        this.token = data.token;
        console.log(this.token);
        localStorage.setItem('user', this.user,);
        this.router.navigate([`./professional/`]);
      //  localStorage.setItem('token', this.token); 
      } 
      else if(data.role == 'Cooking'){
        this.recalll(data);
        this.user= data.role;
        this.token = data.token;
        console.log(this.token);
        localStorage.setItem('user', this.user,);
        this.router.navigate([`./professional/`]);
      //  localStorage.setItem('token', this.token); 
      } 
      else {
        this.error_message = data;   
      } 
    },)
  }


  

};
