import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Commonserviceprovider } from '../../../../providers/commomservice/commonservice';

declare var $: any;

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})

export class ModalComponent implements OnInit {

  servicedata:any;
  data:any;

  tempForm: FormGroup;
  allStudents: any = [];
  i: any =1;
  name:any = "";
  email: any = "";
  gender: any = "";
  password: any = "";
  password2: any = "";
  phone: any = "";
  loginisby: boolean = true;

  newstudent:boolean = true;
  jobid:any;

  constructor(private commonservice: Commonserviceprovider) { }

  ngOnInit() { }

  loginby(x) {
    if (x=='email')
      this.loginisby = true;
    else if (x=='mobile')
      this.loginisby = false;
  }

  register() {

    this.servicedata = {
     name: this.name,
     email: this.email,
     phone: this.phone,
     gender: this.gender,
     password: this.password,
     password2: this.password2
    }

   this.commonservice.postMethod("student/api/register", this.servicedata).subscribe(
       res => {
       this.data=res;
       if(this.data.status==true){
        //  $("#newJob").modal("hide");
        //  this.getjob();
        alert("Registration successful!");
       }
       else {
        var m = this.data.response;
        $('#checkRegister').next('i').remove();
        $("#checkRegister").after("<i style='color:red; font-size:20px;'>"+m+"</i>");
       }
     },
     error => {
       console.log(error);
     }
   );
  }

  login() {
    if (this.loginisby) {
      this.servicedata = {
        email: this.email,
        password: this.password
       }
    }
    else {
      this.servicedata = {
        phone: this.phone,
        password: this.password
       }
    }

   this.commonservice.postMethod("student/api/login", this.servicedata).subscribe(
       res => {
       this.data=res;
       if(this.data.status==true){
        //  this.getjob();
          $('#checkLogin').next('i').remove();
          $("#checkLogin").after("<i style='color:green; font-size:20px;'>Login Success</i>");
          $("#myModalR1").modal("hide");
          sessionStorage.setItem("isLogin",this.encode('yes'));
          localStorage.setItem("student",this.encode(this.data.response));
          location.reload(true);
       }
       else {
        var m = this.data.response;
        $('#checkLogin').next('i').remove();
        $("#checkLogin").after("<i style='color:red; font-size:20px;'>"+m+"</i>");
       }
     },
     error => {
       console.log(error);
     }
   );
  }
 
  decode(val){
    return atob(val);
  }

  encode(val){
      return btoa(val);
  }

  logout() {
    $("#myModalAccount").modal("hide");
    alert("You have been logged out!");
    sessionStorage.setItem("isLogin",this.encode('no'));
    localStorage.setItem("student","");
    location.reload(true);
  }
}