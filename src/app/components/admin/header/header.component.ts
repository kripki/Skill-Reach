import { Component, OnInit } from '@angular/core';
import { Commonserviceprovider } from '../../../../providers/commomservice/commonservice';

@Component({
  selector: 'admin-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class AdminHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } 
        else {
          dropdownContent.style.display = "block";
        }
      });
    }
    var side = document.getElementById("openbtn");
    var sidenav = document.getElementById("sidenav");
    side.addEventListener("click", function() {
    if (sidenav.style.width == "200px") {
      document.getElementById("sidenav").style.width = "0px";
      document.getElementById("main").style.marginLeft = "0px";
      } else {
        document.getElementById("sidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
      }
    });
  }
}
