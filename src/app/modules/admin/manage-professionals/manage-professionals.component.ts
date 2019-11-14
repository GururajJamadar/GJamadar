import { Component, OnInit,ViewChild,ViewRef,ElementRef } from '@angular/core';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { Router } from '@angular/router';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
declare var $;


@Component({
  selector: 'app-manage-professionals',
  templateUrl: './manage-professionals.component.html',
  styleUrls: ['./manage-professionals.component.scss']
})
export class ManageProfessionalsComponent implements OnInit {
 @ViewChild ('popupProfessional',{static: false}) popupProfessional:ElementRef;

  constructor(private router:Router,private restService:RestserviceService) { }
 searchtext1:any;
 currentPage = 1;
itemsPerPage = 5;
pageSize: number;
p:any;
   
   ngOnInit() {
   this.getNewAstro();
	}

public newastro:any = [];
	getNewAstro(){
		let url:string = ApplicationUrls.GetAllNewastrologer;
		this.restService.Get(url).subscribe(data=> {
			console.log("@@@@",data);
        this.newastro  =  data;
        	console.log("this count data",data);
    });
}

public approveastro;
	 approveAstrologer(data){
	 	let url:string = ApplicationUrls.ApproveAstro;
   			console.log('##################',data);
   		let obj={'mobile_number':data}
    	this.restService.Post(url,obj).subscribe(data=> {
        this.approveastro  =  data;
        this.getNewAstro();
        
    });
}

disapproveastro(data){
  let url:string = ApplicationUrls.DisapproveAstrologer;
   console.log('##################',data);
   let obj={'mobile_number':data}

    this.restService.Post(url,obj).subscribe(data=> {
        this.approveastro  =  data;
        this.getNewAstro();
        
    });
}	

professionalPopUP(){

   $(this.popupProfessional.nativeElement).modal('show')
}

}
