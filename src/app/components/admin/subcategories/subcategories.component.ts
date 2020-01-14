import { Component, OnInit } from '@angular/core';
import { Commonserviceprovider } from '../../../../providers/commomservice/commonservice';

declare var $: any;

@Component({
  selector: 'admin-subcategories',
  templateUrl: 'subcategories.component.html',
  styleUrls: ['subcategories.component.css']
})

export class AdminSubCategoriesComponent implements OnInit {

  servicedata:any;
  data:any;
  newsubcategory:boolean = false;
  allSubCategories: any = [];
  allCategories: any = [];
  subCategoryId:any;
  name:any;
  description:any; 
  categoryId:any; 
  file: any;
  imageUrl: string;
  oldImage: string;
  baseurl:any;

  constructor(private commonservice: Commonserviceprovider) {
    this.baseurl = commonservice.baseurl;
    this.getsubcategory();
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

  addupdatesubcategory()
  {
    if(this.newsubcategory) this.addsubcategoryImage();
    if(!this.newsubcategory) this.updatesubcategory();
  }

  addsubcategoryImage() {

      var postData = new FormData();

      postData.append('name', this.name);
      postData.append('description', this.description);
      postData.append('categoryid', this.categoryId);
      postData.append('avatar', this.file);

      this.servicedata = postData;
      this.commonservice.postImgMethod("subcategory/api/addSubCategory", this.servicedata).subscribe(
        res => {
          this.data=res;
          console.log(this.data);
          if(this.data.status==true){
            this.getsubcategory();
            this.hideshowpage('subcategorylistpage');
          }
          else {
            alert("unable to add subcategory");
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  updatesubcategory(){
    
    var postData = new FormData();
    postData.append('id', this.subCategoryId);
    postData.append('name', this.name);
    postData.append('description', this.description);
    postData.append('categoryid', this.categoryId);
    postData.append('oldavatar', this.oldImage);
    postData.append('avatar', this.file);

    this.servicedata = postData;

   this.commonservice.postImgMethod("subcategory/api/updateSubCategory", this.servicedata).subscribe(
       res => {
       this.data=res;
       console.log(this.data);
       if(this.data.status==true){
         this.getsubcategory();
         this.hideshowpage('subcategorylistpage');
       }
       else {
         alert("unable to edit subcategory");
       }
     },
     error => {
       console.log(error);
     }
   );
  }

  mynewsubcategory(){
    this.newsubcategory = true;
    this.hideshowpage('addsubcategorypage');
    this.name = "";
    this.description = "";
    this.categoryId = "";
    this.imageUrl = "";
  }

  editsubcategory(subcategory) {
    this.newsubcategory = false;
    this.hideshowpage('addsubcategorypage');
    this.subCategoryId = subcategory._id;
    this.name = subcategory.name;
    this.description = subcategory.description;
    this.categoryId = subcategory.categoryid;
    this.imageUrl = this.baseurl+"subcategories/"+subcategory.image;
    this.oldImage = subcategory.image;
 }

  getsubcategory()
  {
    this.servicedata = [];
    // this.servicedata.push({last_id: this.lastproductid});
    this.commonservice.getMethod("subcategory/api/getSubCategory", this.servicedata).subscribe(
      res => {
          this.data = res;
          if (this.data.status == true) {
            this.allSubCategories = this.data.response;
          }
      },
      error => {
        console.log(error);
      }
    );
  }

  removesubcategory(id){
    var cnf = confirm('Are You Sure?');
    if (cnf) {
      this.servicedata = {
        id: id
      }

      this.commonservice.postMethod("subcategory/api/removeSubCategory", this.servicedata).subscribe(
          res => {
          this.data=res;
          console.log(this.data);
          if(this.data.status==true){
            this.getsubcategory();
          }
          else {
            alert("unable to remove subcategory");
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  getcategory()
  {
    this.servicedata = [];
    // this.servicedata.push({last_id: this.lastproductid});
    this.commonservice.getMethod("category/api/getCategory", this.servicedata).subscribe(
      res => {
          this.data = res;
          if (this.data.status == true) {
            this.allCategories = this.data.response;
          }
      },
      error => {
        console.log(error);
      }
    );
  }

  hideshowpage(action) {
    $('.tablepage').addClass('d-none');
    $('.'+action).removeClass('d-none');
    if(action=='addsubcategorypage'){
      $('.pagetitle').text('Add SubCategory');
    }
    if(action=='subcategorylistpage'){
      $('.pagetitle').text('Manage SubCategory');
    }
  }
}