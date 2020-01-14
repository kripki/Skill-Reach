import { Injectable } from '@angular/core';
// import { AlertController, LoadingController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
        //   'x-token': '721e57881716790c52781743104e2377',
        //   'x-authentication-key': 'e06a5771a1bede776621e33cc8a0a550'
        //    'Authorization': 'my-auth-token'
    })
  };

const httpOptions1 = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  })
};
@Injectable()
export class Commonserviceprovider{

    loading:any;
    baseurl:any="http://localhost:3000/";
    servicedataformated:any;

    loadingstatus:boolean = false;

    constructor(public http: HttpClient) {
        console.log('Hello Commonserviceprovider Provider');
    }

    getMethod(serviceurl, servicedata) {
        console.log(servicedata.length);
        if(servicedata.length > 0) {
          let i=0;
          for (let obj of servicedata){
            for (let key in obj) {
              if(i==0){
                  this.servicedataformated=serviceurl+"?"+key+"="+obj[key];
                  // this.servicedataformated=obj[key];
              }
              else{
                  this.servicedataformated+="&"+key+"="+obj[key];
              }
            }
            i++;
          }
        }
        else {
            this.servicedataformated = serviceurl;
        }
        return this.http.get(this.baseurl + this.servicedataformated, httpOptions);
    }
  
    postMethod(serviceurl ,servicedata){
        return this.http.post(this.baseurl + serviceurl, servicedata, httpOptions);
    }
  
    postImgMethod(serviceurl, formData) {
      console.log(formData);
      return this.http.post(this.baseurl + serviceurl, formData);
    }
  }