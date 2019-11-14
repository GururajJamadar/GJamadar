import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor } from '@angular/common/http';
import { LoginService } from '../LoginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req,next){
  
const token = localStorage.token;
  	let tokenizedReq=req.clone({
  		setHeaders:{
  			Authorization:`${localStorage.getItem('token')}`
  		}

  	})
       console.log("ddddddddddd",tokenizedReq)

  	return next.handle(tokenizedReq)
  }
}
