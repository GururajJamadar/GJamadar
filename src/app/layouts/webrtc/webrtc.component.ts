import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {RestserviceService} from '../../core/Services/RestService/restservice.service';
import {Router} from '@angular/router';
import { LoginService } from '../../core/Services/LoginService/login.service'

import { UserPendingAppointmentsComponent } from '../../modules/user/user-pending-appointments/user-pending-appointments.component';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { ApplicationUrls } from '../../core/models/applicationUrls'
import * as RecordRTC from 'recordrtc';

declare var RTCMultiConnection: any;
declare var $;
@Component({
 
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.scss'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class WebrtcComponent implements OnInit {
  private stream: MediaStream;
  private recordRTC: any;
  public save;
  public Blop;
  str: string;

@ViewChild('remoteVideo',{static:false}) remoteVideo:ElementRef;
@ViewChild('review',{static:false}) review:ElementRef;
@ViewChild('appoint',{static:false}) appoint:ElementRef;


public connection;
  public localVideoContainer;
  public remoteVideoContainer;
  public video;
  public roomid:any={};
  public disabled;
  public counter;
  public count;
  public orderdata;
  public orderid;
  public stop;
  public wait;
  public log;
  public start;
  public data1;
  public Client_Rating:any;



 constructor(private restservice: RestserviceService,private config: NgbRatingConfig,private router:Router,private elRef:ElementRef
             ,private loginServ:LoginService) { 
 config.max = 5;
 }

 ngAfterViewInit() {
  // set the initial state of the video
  let video = this.elRef.nativeElement.querySelector('remoteVideo');
}
toggleControls() {
  let video = this.elRef.nativeElement.querySelector('remoteVideo');
}
successCallback(stream: MediaStream) {
  var options = {
    mimeType: 'video/webm', 
    audioBitsPerSecond: 128000,
    videoBitsPerSecond: 128000,
    bitsPerSecond: 128000 
  };
try {
  this.stream = stream;
  this.recordRTC = RecordRTC(stream, options);
  this.recordRTC.startRecording();
} catch (error) {
  let video = this.elRef.nativeElement.querySelector('remoteVideo');
  video.src = window.URL.createObjectURL(stream);
  this.toggleControls();
}

}

errorCallback() {
  alert("hiiiiiiiiiiiii");
  //handle error here
}

processVideo(audioVideoWebMURL) {
  let video = this.elRef.nativeElement.querySelector('remoteVideo');
  let recordRTC = this.recordRTC;
  video.src = audioVideoWebMURL;
  this.toggleControls();
  var recordedBlob = recordRTC.getBlob();
  recordRTC.getDataURL(function(dataURL) {});


}

startRecording1() {
  let mediaConstraints = {
    video: {
      width: 1280,
      height: 720
    },
    audio: true
  };

  navigator.mediaDevices
    .getUserMedia(mediaConstraints)
    .then(this.successCallback.bind(this), this.errorCallback.bind(this));
}


download1() {
   let recordRTC = this.recordRTC;
  recordRTC.stopRecording(this.processVideo.bind(this));
  let stream = this.stream;
  stream.getAudioTracks().forEach(track => track.stop());
  stream.getVideoTracks().forEach(track => track.stop());
  this.recordRTC.save('video.webm');
}

movetoratings(data){
  console.log('hhhhhhhh',data);
  this.data1={
    id:data,
  }
  // let url=ApplicationUrls.MOVE_TO_RATING1
  // this.restservice.Post(url,this.data1).subscribe( respback =>{
  $(this.review.nativeElement).modal('show');
  console.log('vvvvvvvvv');
  // })
  
}


public livedata;
public feedback1;
public rating;
feedback(data,data1){
  if (data1){
      this.rating ={'rate':data,'review':data1,'oredrid':this.OrderIdNumber}
  console.log('jjjjjjjjjjj',this.rating);
  let url =ApplicationUrls.Ratingandfeedback
  this.restservice.Post(url,this.rating).subscribe(data=>{
  
    this.livedata=data;  
    console.log("@#$%^&*",data)
      let role=localStorage.getItem('user'); 
    if (role=='client'){
      
      this.router.navigate(['/user/user_completed_appointments'])

    }else{
      this.router.navigate(['/professionals/professional_completed_appointments'])

    }
  });
  }
//   this.rating ={'rate':data,'review':'','id':this.orderdata.id,'mobile_number':this.orderdata.astrologer_mobile_number}
//   console.log('jjjjjjjjjjj',this.rating);
//   let url = ApplicationUrls.FEED_BACK1;
//   this.restservice.Post(url,this.rating).subscribe(data=>{
  
//     this.livedata=data;  
//       let role=localStorage.getItem('user'); 
//     if (role=='client'){
      
//       this.router.navigate(['/client/completed'])

//     }else{
//       this.router.navigate(['/professionals/completed'])

//     }
//   });
}
  
public astrodata;
 public currentRate;
 public OrderIdNumber ;
  ngOnInit() {
    // console.log("avinash...............", this.restservice.videocallOrderId);
    this.OrderIdNumber = localStorage.getItem('orderDetails');
    console.log("Avinash.............", this.OrderIdNumber);
    this.loginServ.current_user.subscribe((data: any) => {
      this.astrodata = data;
      console.log('hiiiiiiiiiiiiiiii', data);
    });
     this.astrodata = this.restservice.bookingdata;
     
      this.restservice.currentMessage1.subscribe(message => this.orderdata = message)
      // this.orderid = this.orderdata.order_id;
      this.orderid = this.restservice.videocallOrderId;
      console.log("varun",this.orderdata);
    console.log("start..88888",this.OrderIdNumber);


    this.count = 20;

    this.connection = new RTCMultiConnection();
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.....", this.connection);
    this.connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

    this.connection.session = {
      audio : true,
      video:true
    };

    this.connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true

    };

    this.localVideoContainer = document.getElementById('localVideo');
    this.remoteVideoContainer = document.getElementById('remoteVideo');


    this.connection.onstream = (event) => {
      this.video = event.mediaElement;
      console.log("111111111", this.video, event);

      if(event.type === 'local'){
        this.localVideoContainer.appendChild( this.video );
      }

      if(event.type === 'remote'){
        this.remoteVideoContainer.appendChild( this.video );
        // this.counter = setInterval(this.timerFun(this.count), 1000);
        this.timerFun();
      }
    }
    if(this.connection){
      this.openvideo(12345);
    }
  }

  openvideo(data){
    this.roomid = data;
    this.disabled = true;
    this.connection.openOrJoin(this.roomid || 'predefiend-roomid');
  };  callend(){
    let obj={'orderid':this.OrderIdNumber}
    console.log("", this.orderid);
    this.connection.attachStreams.forEach(function(localStream) {
        localStream.stop();

    });
    this.connection.close();

    this.endtime()
    document.getElementById("timerElement").style.visibility = "hidden";
    let url=ApplicationUrls.VIDEO_CALL_COMPLETED
    this.restservice.Post(url,obj).subscribe(data=>{
       $(this.appoint.nativeElement).modal('show');
    console.log('PPPPPPPPPPPPPPPP',data); 
    // localStorage.clear('orderDetails');

    
  });

  };

  public timer;
  timerFun() {    
    this.timer = setInterval(() => {
      console.log("eeee", this.count);
      this.count = this.count - 1;
      if (this.count == 0){
          this.callend();
         
          document.getElementById("timerElement").style.visibility = "hidden";
       };

      if (this.count == -1) {
          console.log("1", this.count)
          clearInterval(this.timer);
        return;
      };
      let seconds = this.count % 60;
      let minutes = Math.floor(this.count / 60);
      let hours = Math.floor(minutes / 60);
      minutes %= 60;
      hours %= 60;

      document.getElementById("timerElement").innerHTML = hours + ":" + minutes + ":" + seconds;
    }, 1000)
  }
 
 endtime(){
   clearInterval(this.timer);
 }
}


