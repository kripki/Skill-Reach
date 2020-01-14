import { Component, OnInit } from '@angular/core';
import { Commonserviceprovider } from '../../../../providers/commomservice/commonservice';

@Component({
  selector: 'team',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.css']
})

export class TeamComponent implements OnInit {

  servicedata:any;
  data:any;
  allcategories: any = [];
  baseurl:any;

  constructor(private commonservice: Commonserviceprovider) { 
    this.baseurl = commonservice.baseurl;
    this.getcategory();
  }

  ngOnInit() { }
  
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