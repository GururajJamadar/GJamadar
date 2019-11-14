import { Component, OnInit, Output, EventEmitter,ViewChild,ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RestserviceService } from '../../../core/Services/RestService/restservice.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { profiledetail1Pop } from '../../Home/astro-home/astro-home.component'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { DatePipe } from '@angular/common';
import { VERSION} from '@angular/material';
declare var $;
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-bookingappoinment',
  templateUrl: './bookingappoinment.component.html',
  styleUrls: ['./bookingappoinment.component.scss']
})
export class BookingappoinmentComponent implements OnInit {

  @ViewChild('appointsucess',{static:false}) appointsucess:ElementRef;
  events: string[] = [];
  myDate = new Date();
  public date=this.datePipe.transform(this.myDate,"yyyy-MM-dd")


  public slotslist=[];


  @Output() dateChange:EventEmitter< MatDatepickerInputEvent< any>>;


  constructor(private restService:RestserviceService,private router:Router,private datePipe: DatePipe) 
  {

  }
  model = new Date();
  minDate = new Date(2019, 1, 18);
  maxDate = new Date(2040, 0, 1);

  public todaydate1;
  public day;
  myFilterFunction(data) {
    console.log(data);
    var todaydate = new Date();
    this.todaydate1=this.datePipe.transform(todaydate,"yyyy-MM-dd")
    console.log(this.todaydate1 );
    this.day = data;
    // for (let i of this.day) {
      // for (let i = 0; i < this.day.length; i++) {
        if (this.day !== 0 ) {
          console.log(this.day);
          return ;
        }
        // }
      }

      public booking_slots1:any =[];
      public mobile_number;
      public selectdate:any={};
        message:any;
      public usedMoney;
      public disableContinueslot;
      public walletSave;
      public wallet_money;
      public wallet_original_money;
      public slot;
      public disableContinueType;
      public astroprice;
      public astrologerprice;
      public clidata;
      public astrodata;
      public cgst;
      public astrogst;
      public servicecharge;
      public servicecharge1;
      public totalprice;
      public warningalrt;
      public reshedulemoney;
      public time;
      public astroname;
      public days;



      selectslot(data) {
        console.log("inside selectslot",data);
        this.time = data.time_of_booking;
        console.log(this.time );
        this.disableContinueslot = true;
        this.wallet_money = this.clidata['clientData']['wallet_money'];
        this.reshedulemoney = this.wallet_money;
        console.log(this.disableContinueslot, this.wallet_money);
        if(this.reshedulemoney < this.astroprice) {
          this.usedMoney = this.reshedulemoney;
          // this.wallet_money -= this.astroprice;
          this.astrologerprice = this.astroprice -this.wallet_money;
          this.cgst = (this.astrologerprice * 18) / 100;
          this.astrogst = this.cgst + this.astrologerprice;
          this.servicecharge = (this.astrogst * 10) / 100;
          console.log("GGST", this.cgst, "service Charge", this.servicecharge ,"walletmoney", this.usedMoney);
          if (this.servicecharge < 100) {
            this.servicecharge1 = 100;
          } else {
            this.servicecharge1 = this.servicecharge;
          }
          this.totalprice = this.servicecharge1 + this.astrologerprice  + this.cgst;
        }
        else if (this.reshedulemoney >= this.astroprice) {
          this.astrologerprice = this.astroprice;
          this.usedMoney = this.astroprice;
          this.walletSave = true;
          this.wallet_money -= this.astroprice;
          console.log("wallet_money", this.wallet_money);
          this.cgst = 0;
          this.astrogst = 0;
          this.servicecharge = 0;
          console.log("GGST", this.cgst, "service Charge", this.servicecharge)
          this.servicecharge1 = this.servicecharge;
          this.totalprice = this.servicecharge1 + this.cgst;
        }

      }

      public latest_date1:any;
      public date1:any;
      public obj:any;
      datewise_timeslots(data){
        console.log('----------',data);
        let url : string = ApplicationUrls.CHECKAVILABLITY;
        var day = data.getDay();
        console.log('kkkkkkk',day);
        this.latest_date1=this.datePipe.transform(data,"yyyy-MM-dd")
        this.obj={'date_of_booking':this.latest_date1,'mobile_number':this.mobile_number }
        console.log('--------------------------',this.obj);
        this.restService.Post(url,this.obj).subscribe(
          responseData =>{
            console.log("dataa from backend------------------",responseData);
            this.booking_slots1 = responseData.slotList;
            console.log("dataa  backend------------------", this.booking_slots1);

          });
      }
      public astroprice1;
      move_booking() {
        let url : string = ApplicationUrls.RESCHEDULEBOOKING;
        console.log(this.date,"ffff")
        let new_with_current=this.datePipe.transform(this.date,"yyyy-MM-dd")
        console.log('*******************************',new_with_current)
        this.currency = "INR";
        this.amount = this.totalprice;
        this.gst = this.cgst;
        this.servicecharge = this.servicecharge1;
        this.astroprice1 = this.astroprice;
        let obj = {
          'client_mobile': this.clidata['clientData']['mobile_number'],
          'cleint_first_name':this.clidata['clientData']['first_name'],
          'astrologer_price': this.astroprice1,
          'gst': this.gst,
          'service_charge': this.servicecharge,
          'currency': this.currency,
          'time_of_booking': this.time,
          'bookingdate': new_with_current,
          'amount': this.amount,
          'mobile_number': this.mobile_number,
          'astrologer_name': this.astroname,
          'deduction_from_wallet': this.astroprice
        }
        this.restService.Post(url,obj).subscribe(data =>{
          console.log("dataa from backend------------------",data);
          $(this.appointsucess.nativeElement).modal('show');
        });

      }

      public merchant_id;
      public currency;
      public redirect_url;
      public cancel_url;
      public language;
      public amount;
      public gst;
      public encReq;
      public xscode;
      moveToPayment() {
        let url :string = ApplicationUrls.CCAVREQUESTHANDLER;
        let new_with_current=this.datePipe.transform(this.date,"yyyy-MM-dd")
        console.log("insidepayment",new_with_current);
        this.merchant_id = "208119";
        this.currency = "INR";
        // this.redirect_url = "https://127.0.0.1:8000/ccavResponseHandler";
        // this.cancel_url = "https://127.0.0.1:8000/ccavResponseHandler";
        this.redirect_url = "https://www.glearn.in:8001/ccavResponseHandler";
        this.cancel_url = "https://www.glearn.in:8001/ccavResponseHandler";
        this.language = "EN";
        console.log(this.merchant_id, this.currency, this.redirect_url, this.cancel_url, this.language)
        this.amount = this.totalprice;
        // console.log("date--------", this.bookingdate, "bookingdate1", this.bookingdate1)
        console.log(this.amount)
        console.log(this.language)
        this.gst = this.cgst;
        this.servicecharge = this.servicecharge1;
        this.astroprice = this.astroprice;
        let obj={'merchant_id':this.merchant_id,'mobile_number': this.astrodata.mobile_number,'currency':this.currency,'redirect_url':this.redirect_url,'cancel_url':this.cancel_url,'language':this.language,'gst':this.gst,'servicecharge':this.servicecharge,'astroprice':this.astroprice,'total amount':this.amount,'date_of_booking':new_with_current,'time_of_booking':this.time,'astroname':this.astroname,'clientname':this.clidata['clientData']['first_name'],'clientmobile':this.clidata['clientData']['mobile_number'] }
        this.restService.Post(url,obj).subscribe(data =>{
          console.log("dataa from backend------------------",obj);

          this.encReq = data.encReq;
          this.xscode = data.xscode;
          console.log("this.encReq", this.encReq)
          console.log("this.xscode", this.xscode)
          // window.location.href = "http://127.0.0.1:8000/sampletext/" + data.encReq + "/" + data.xscode
          window.location.href = "https://www.glearn.in:8001/sampletext/" + data.encReq + "/" + data.xscode
        });
      }

      ngOnInit() {
        this.walletSave = false;
        this.warningalrt = false;
        this.disableContinueslot = false;
        let url:string = ApplicationUrls.CLIENT_DETAILS;


        console.log('$$$$$$$$$$$$$$$$$$$$$$$',this.restService.bookingdata)

          this.restService.Get(url).subscribe( clientdata => {
          console.log("the data from the backend",clientdata);
          this.clidata = clientdata;
          console.log("************",this.astroprice);
          this.wallet_money = this.clidata['clientData']['wallet_money'];
          //resttt
          let userId = localStorage.getItem("editUserId");
          if(!userId) {
            this.router.navigate(['user']);
            return;
          }
           let url : string = ApplicationUrls.CHECKAVILABLITY;
          this.restService.Post(url,JSON.parse(userId))
          .subscribe( responseData => {
            console.log("dataa from backend------------------",responseData);
            this.booking_slots1 = responseData.slotList;
            this.mobile_number = responseData.mobile;

          });

        });

        this.astrodata = this.restService.bookingdata;
        this.astroprice = this.astrodata.video_price;
        this.astroname = this.astrodata.first_name;
        this.days = this.astrodata.days;
        console.log("hhhhh",this.astroprice,this.days, this.astrodata );



      }


    }



