import { Component, OnInit } from '@angular/core';
import { Commonserviceprovider } from '../../../../providers/commomservice/commonservice';

@Component({
  selector: 'services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css']
})

export class ServiceComponent implements OnInit {

  servicedata:any;
  data:any;
  allcategories: any = [];
  allsubcategories: any = [];
  baseurl:any;

  constructor(private commonservice: Commonserviceprovider) { 
    this.baseurl = commonservice.baseurl;
    this.getcategory();
    this.getsubcategory();
  }

  ngOnInit() { }

  getsubcategory()
  {
    this.servicedata = [];
    // this.servicedata.push({last_id: this.lastproductid});
    this.commonservice.getMethod("subcategory/api/getSubCategory", this.servicedata).subscribe(
      res => {
          this.data = res;
          if (this.data.status == true) {
            this.allsubcategories = this.data.response;
          }
      },
      error => {
        console.log(error);
      }
    );
  }

  getcategory()
  {
    this.servicedata = [];
    // this.servicedata.push({last_id: this.lastproductid});
    this.commonservice.getMethod("category/api/getCategory", this.servicedata).subscribe(
      res => {
          this.data = res;
          if (this.data.status == true) {
            this.allcategories = this.data.response;
          }
      },
      error => {
        console.log(error);
      }
    );
  }
}