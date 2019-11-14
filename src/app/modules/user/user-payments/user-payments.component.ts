
import {Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import  { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { ApplicationUrls } from '../../../core/models/applicationUrls';



@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.scss']
})

export class UserPaymentsComponent implements OnInit {

currentPage = 1;
itemsPerPage = 5;
pageSize: number;
searchText2:any;
p:any;
  constructor(private restService:RestserviceService) { }

public defaultimg:any="../assets/images/account.png"
  ngOnInit() {
    this.getTransactionHistory();
  }
  
  public tbookings: any;
  // public i: any;
  
  getTransactionHistory(){
    this.restService.Get(ApplicationUrls.GET_BOOKING_DETAIL).subscribe(data=>{
      console.log("dataaaaaaaaa",data);
      this.tbookings=data.serialized;
      console.log("@@@@@@@@",this.tbookings);
    });
   }

  
  public TransDetails;
  public selectedd = "";
   popTransaction(i){
     this.TransDetails=i
     if(this.selectedd != i.id){
       this.selectedd = i.id;
     }else {
       this.selectedd = ""
     }
     console.log("#####",this.selectedd)
   }
    public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }
  
  public changePagesize(num: number): void {
  this.itemsPerPage = this.pageSize;
}

}


