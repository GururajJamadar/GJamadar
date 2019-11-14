import { Component, OnInit } from '@angular/core';
import {RestserviceService} from '../../../core/Services/RestService/restservice.service';
import { NgForm } from '@angular/forms';
import { ApplicationUrls } from '../../../core/models/applicationUrls';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';

@Component({
  selector: 'app-academicssignup',
  templateUrl: './academicssignup.component.html',
  styleUrls: ['./academicssignup.component.scss']
})

export class AcademicssignupComponent implements OnInit {
     

  public clientProfiPic: File;
  public selectedProfilePic: File;

  employee2Form: FormGroup

     public days:any = [];
     public em: any;
     public employee1Form: any = {}
     public countryList: any;

  cities: Array<any>;
  changeCountry(count) {
    console.log("ffffffff", )
    this.cities = this.countryList.find(con => con.name == count).cities;
  }
  constructor(public restserv:RestserviceService, public router:Router) { }

public mobile_number;
  ngOnInit() {

const swal: SweetAlert = _swal as any;
     this.mobile_number = localStorage.getItem('mobile');
    this.countryList = this.restserv.countryList1;
  }

keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  keyPress1(event: any) {
    const pattern = /[a-z\+\A-Z ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
   
   lang_roles = [];
psubjects: string[] = ['English', 'Kannada', 'Science', 'Social', 'Maths', 'Drawing', 'Hindi'];

  ssubjects: string[] = ['English', 'Kannada', 'Physics', 'Chemistry', 'Biology', 'Electronics', 'CS', 'Social'];
 

  llang_roles: string[] = ['Hindi', 'Bengali', 'Gujarati', 'Konkani', 'Manipuri', 'Oriya', 'Santali', 'Telugu', 'Assamese', 'Dogri', 'Kashmiri', 'Malayalam', 'Nepali', 'Sanskrit', 'Tamil', 'Urdu', 'English', 'Bodo', 'Kannada', 'Maithili', 'Marathi', 'Punjabi', 'Sindhi'];

  ddays = [{ text: 'Mon', value: 1 },
  { text: 'Tue', value: 2 },
  { text: 'Wed', value: 3 },
  { text: 'Thur', value: 4 },
  { text: 'Fri', value: 5 },
  { text: 'Sat', value: 6 },
  { text: 'Sun', value: 7 },
  ];

  mstime: any = ['06:00', '06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30',];
  metime: any = ['06:30 ', '07:00', '07:30', '08:00', '08:30', '09:00 ', '09:30', '10:00 ', '10:30', '11:00 ', '11:30', '12:00 '];
  estime: any = ['12:00 ', '12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30',];
  eetime: any = ['12:30', '13:00 ', '13:30', '14:00 ', '14:30', '15:00 ', '15:30', '16:00 ', '16:30', '17:00 ', '17:30', '18:00 ', '18:30', '19:00 ', '19:30', '20:00 ', '20:30', '21:00 ', '21:30', '22:00 ', '22:00', '23:00 ', '23:30', '24:00'];

    academicsignup(employee1Form: NgForm): void {

    console.log("appended data", employee1Form.value);
    this.em = { "gdata": employee1Form.value, "days": this.days, "mobile_number": this.mobile_number };
    console.log("data is", this.em);
    let profaddurl=ApplicationUrls.PROFESSIONALADDRESS;
    this.restserv.Post(profaddurl,this.em).subscribe(data=>{
      console.log("data coming from backend",data);
       if(data.message=="Registration Successfull"){
         sweetAlert(
  'Registration Successfull.!',
  'Please fill the further details.!',
  'success'
)
      }else{
        sweetAlert("Something went wrong..!",
  "User Doesn't Exits try to register again.",
  'error')
      }
 
    })
   
  }


 public signupdata: any = {}

  academicsignup1(employee2Form: NgForm): void {
    console.log("appended data", employee2Form.value);
   
    this.signupdata = employee2Form.value;


    if (this.signupdata.undergradua) {
      console.log("if executed")
    } else { this.signupdata.undergradua = null; }

    if (this.signupdata.ugstream) {
      console.log("if executed")
    } else { this.signupdata.ugstream = null; }

    if (this.signupdata.ugsubject) {
      console.log("if executed")
    } else { this.signupdata.ugsubject = null; }

    if (this.signupdata.postgraduate) {
      console.log("if executed")
    } else { this.signupdata.postgraduate = null; }

    if (this.signupdata.pgstream) {
      console.log("if executed")
    } else { this.signupdata.pgstream = null; }

    if (this.signupdata.pgsubject) {
      console.log("if executed")
    } else { this.signupdata.pgsubject = null; }


    this.em = { "tdata": employee2Form.value, "lang_roles": this.lang_roles, "mobile_number": this.mobile_number };
    console.log("data is", this.em);
    let tutorurl=ApplicationUrls.TUTOR_PERSONALINFO;
    this.restserv.Post(tutorurl,this.em).subscribe(
      data => {
        console.log("response from backend", data);
        this.router.navigate(['/registration/bankdetail']);
      },
      error => console.log("errrroooooorrr", error)
    )
  }

  public dat: File;

  selectProfilePic(event) {
    console.log("Fileeeeeeeeee event", event);
    this.dat = event.target.files[0];
    console.log("@@@@@@@@", this.dat);

  }

  uploadProfilePic() {
    let obj = { "profile_pic": this.dat['name'], "mobile_number": this.mobile_number }
    let propicUrl=ApplicationUrls.UPLOAD_PROF_PHOTO;
    this.restserv.Post(propicUrl,obj).subscribe(data => {
      console.log("dataaaaaa", data);
    });
  }

  streams = []; subjects = [];
  underChange(e) {
    console.log("event is", e.value.undergraduate)
    this.Undergraduates.filter(element => {
      if (element.undergraduate == e.value.undergraduate) {
        console.log(element.streams[0], "first stream")
        this.streams = element.streams;

      }
    });
    this.subjects = []
  }
  streamsChange(evt) {
    console.log("streams is", evt.value.name)
    this.streams.filter(element => {
      if (element.name == evt.value.name) {
        this.subjects = element.subjects;

      }
    })
  }

  streams1 = []; subjects1 = [];
  postChange(e) {
    console.log(e.value.postgraduate)
    this.Postgraduates.filter(element => {
      if (element.postgraduate == e.value.postgraduate) {
        console.log(element.streams1[0], "first stream")
        this.streams1 = element.streams1;
      }
    })
  }

  strChange(evt) {
    console.log(evt.value.name, this.streams1)
    this.streams1.filter(element => {
      if (element.name == evt.value.name) {
        this.subjects1 = element.subjects1;
      }
    })
  }

 
  selectProfilePic1(event: any) {
    let propicUrl=ApplicationUrls.UPLOAD_PROF_PHOTO;
    this.selectedProfilePic = <File>event.target.files[0];
    console.log(this.selectedProfilePic, "hiiii");
    const pfp = new FormData();
    pfp.append("profile_pic", this.selectedProfilePic)
    this.mobile_number = localStorage.getItem('mobile');
    console.log('********', this.mobile_number)
    pfp.append("mobile_number", this.mobile_number)
    this.restserv.Post(propicUrl,pfp).subscribe(
      responseData => {
        console.log("dataa from backend", responseData)
      },
      error => console.log("dataa from backend", error)

    );
  }

  public Undergraduates = [{ "undergraduate": "BE", "streams": [{ "name": "CSE", "subjects": ["Data Structures", "Object Oriented Programming", "Design of Algorithms", "Intertnet Programming", "Computer Networks"] }, { "name": "ISE/IT", "subjects": ["Data Structures", "Object Oriented Programming", "Design of Algorithms", "DBMS", "Discrete Mathematics"] }, { "name": "ECE", "subjects": ["Logic design", "Field Theory", "Digital Signals and Processing", "Communication Systems", "Electronics Circuit"] }, { "name": "ME", "subjects": ["Engineering Graphics", "Thermodynamics", "Kinematics", "Fluid Mechanics", "Manufacturing Process"] }, { "name": "CE", "subjects": ["Strength of Materials", "Surveying", "Concrete Technology", "Fluid Mechanics", "Environment Engineering"] }, { "name": "EEE", "subjects": ["Basic Electrical Engineering", "Control Systems", "Power Electronics", "Digital Electronics Circuit", "Analog Electronics Circuits"] }] },
  { "undergraduate": "BSc", "streams": [{ "name": "PCM", "subjects": ["Physics", "Chemistry", "Mathematics"] }, { "name": "PCB", "subjects": ["Physics", "Chemistry", "Biology"] }] },
  { "undergraduate": "Computer Application", "streams": [{ "name": "BCA", "subjects": ["C Programming", "Operation Research", "Programming with C++"] }] },
  { "undergraduate": "BBM", "streams": [{ "name": "BBM", "subjects": ["Financial Accounting", "Business Mathematics", "Enterpreneurship Development", "Business Economics", "Income Tax"] }] }

  ]

  public Postgraduates = [{ "postgraduate": "MTech", "streams1": [{ "name": "Computer Science", "subjects1": ["Machine Learning", "Data Science", "Cloud Computing", "Mobile Application Development"] }, { "name": "Software Engineering", "subjects1": ["Advanced Operating Systems", "Advanced Algorithms", "Advanced DBMS", "Software Testing"] }] },
  { "postgraduate": "MSc", "streams1": [{ "name": "Mathematics", "subjects1": ["General Mathematics", "Applied Mathematics", "Statistics"] }, { "name": "Chemistry", "subjects1": ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"] }] },
  { "postgraduate": "MBA", "streams1": [{ "name": "Finance", "subjects1": ["Manegerial Economics", "Financial Management", "Project Management", "Management and Enterpreneurship"] }, { "name": "Marketing", "subjects1": ["Internet Marketing", "International Marketing", "Marketing Research", "Pricing Management"] }] }
  ]
}
