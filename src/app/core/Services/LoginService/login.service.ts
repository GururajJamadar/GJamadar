import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse} from  '@angular/common/http';
import { Observable,of, Subject, Observer, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
      public BASE_URL:string;  

  constructor(public  HttpClient:  HttpClient,private restServ:RestserviceService) {
  
  this.BASE_URL = environment.BASE_URL;

  var s=localStorage.getItem('currentUser');
  console.log(s);

  if(s != '0' && s!=null){
    this.changeCurrentUser(JSON.parse(s));
  }else{
    this.changeCurrentUser(0);
  }
 }

   getToken(){
    var c = localStorage.getItem('token')
    console.log("checkkkkkkkkkkkkk",c)
    return localStorage.getItem('token');
  }


  private  _current_user = new BehaviorSubject<any>('0');
  current_user = this._current_user.asObservable();
  changeCurrentUser(data){
    console.log(data);
    if(data == 0 || data == null){
      localStorage.setItem('currentUser','0');
    }else{
      localStorage.setItem('currentUser',JSON.stringify(data)  );
    }
    this._current_user.next(data);
  }

  logout11(data):Observable <any>{
    console.log('hiiiiiiiiiiiiiiiiiii');

     let url:string = ApplicationUrls.USER_LOGOUT;
     return this.restServ.Post(url,data);
}
}
