import { Component, OnInit } from '@angular/core';
import { Commonserviceprovider } from '../../../../providers/commomservice/commonservice';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'admin-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css']
})

export class AdminCategoriesComponent implements OnInit {

  servicedata:any;
  data:any;
  newcategory:boolean = false;
  allcategories: any = [];
  categoryid:any;
  name:any;
  description:any; 
  file: any;
  imageUrl: string;
  oldImage: string;
  baseurl:any;

  constructor(private commonservice: Commonserviceprovider) {
    this.baseurl = commonservice.baseurl;
    this.getcategory();
  }

  ngOnInit() { }

  onImagePicked(event: Event){
    this.file = (event.target as HTMLInputElement ).files[0];
    // this.tempForm.patchValue({image: file});
    // this.tempForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.file);
  }

  addupdatecategory()
  {
    if(this.newcategory) this.addcategoryImage();
    if(!this.newcategory) this.updatecategory();
  }

  addcategoryImage() {

      var postData = new FormData();

      postData.append('name', this.name);
      postData.append('description', this.description);
      postData.append('avatar', this.file);

      this.servicedata = postData;
      this.commonservice.postImgMethod("category/api/addCategory", this.servicedata).subscribe(
        res => {
          this.data=res;
          console.log(this.data);
          if(this.data.status==true){
            this.getcategory();
            this.hideshowpage('categorylistpage');
          }
          else {
            alert("unable to add category");
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  updatecategory(){
    
    var postData = new FormData();
    postData.append('id', this.categoryid);
    postData.append('name', this.name);
    postData.append('description', this.description);
    postData.append('oldavatar', this.oldImage);
    postData.append('avatar', this.file);

    this.servicedata = postData;

   this.commonservice.postImgMethod("category/api/updateCategory", this.servicedata).subscribe(
       res => {
       this.data=res;
       console.log(this.data);
       if(this.data.status==true){
         this.getcategory();
         this.hideshowpage('categorylistpage');
       }
       else {
         alert("unable to edit category");
       }
     },
     error => {
       console.log(error);
     }
   );
  }

  mynewcategory(){
    this.newcategory = true;
    this.hideshowpage('addcategorypage');
    this.name = "";
    this.description = "";
    this.imageUrl = "";
  }

  editcategory(category) {
    this.newcategory = false;
    this.hideshowpage('addcategorypage');
    this.categoryid = category._id;
    this.name = category.name;
    this.description = category.description;
    this.imageUrl = this.baseurl+"categories/"+category.image;
    this.oldImage = category.image;
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

  removecategory(id){
    var cnf = confirm('Are You Sure?');
    if (cnf) {
      this.servicedata = {
        id: id
      }

      this.commonservice.postMethod("category/api/removeCategory", this.servicedata).subscribe(
          res => {
          this.data=res;
          console.log(this.data);
          if(this.data.status==true){
            this.getcategory();
          }
          else {
            alert("unable to remove category");
          }
        },
        error => {
          console.log(error);
        }
      );
    }
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
