import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-icons',
  templateUrl: 'side-icons.component.html',
  styleUrls: ['side-icons.component.css']
})

export class SideIconsComponent implements OnInit {

  islogin: boolean = false;

  constructor() { 
    
    if (this.decode(sessionStorage.getItem("isLogin"))=='yes') {
      this.islogin = true;
    }
  }

  ngOnInit() { }
  
  decode(val){
    return atob(val);
  }
}
