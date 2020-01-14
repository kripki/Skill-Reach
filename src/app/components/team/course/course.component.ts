import { Component, OnInit } from '@angular/core';
import { Commonserviceprovider } from '../../../../providers/commomservice/commonservice';
declare var $: any;
@Component({
  selector: 'tutor-course',
  templateUrl: 'course.component.html',
  styleUrls: ['course.component.css']
})

export class TutorCourseComponent implements OnInit {

  newcat:boolean = false;

  constructor() { }

  ngOnInit() { }

  newsubcategory()
  {
    this.newcat =true;
    $('.selectsubcategory').addClass('d-none');
    $('.newsubcategory').removeClass('d-none');
  }

  selectsubcategory(){
    this.newcat =false;
    $('.selectsubcategry').removeClass('d-none');
    $('.newsubcategory').addClass('d-none');
  } 

  newcategory()
  {
    this.newcat =true;
    $('.selectcategory').addClass('d-none');
    $('.newcategory').removeClass('d-none');
  }

  selectcategory(){
    this.newcat =false;
    $('.selectcategory').removeClass('d-none');
    $('.newcategory').addClass('d-none');
  }


  hideshowpage(action) {
    $('.tablepage').addClass('d-none');
    $('.'+action).removeClass('d-none');
    if(action=='addcategorypage'){
      $('.pagetitle').text('Add Category');
    }
    if(action=='categorylistpage'){
      $('.pagetitle').text('Manage Category');
    }
  }
}

