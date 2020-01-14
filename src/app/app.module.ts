import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TopbarComponent } from './components/skill-reach/topbar/topbar.component';
import { HomeComponent } from './components/skill-reach/home/home.component';
import { ServiceComponent } from './components/skill-reach/services/services.component';
import { TeamComponent } from './components/skill-reach/team/team.component';
import { ContactsComponent } from './components/skill-reach/contacts/contacts.component';
import { ContactusComponent } from './components/skill-reach/contactus/contactus.component';
import { TopCategoriesComponent } from './components/skill-reach/top-categories/top-categories.component';
import { FooterComponent } from './components/skill-reach/footer/footer.component';
import { SideIconsComponent } from './components/skill-reach/side-icons/side-icons.component';
import { VideosComponent } from './components/skill-reach/video-page/video-page.component';
import { VideoComponent } from './components/skill-reach/video/video.component';
import { AdminHeaderComponent } from './components/admin/header/header.component';
import { AdminStudentsComponent } from './components/admin/students/students.component';
import { AdminCategoriesComponent } from './components/admin/categories/categories.component';
import { AdminChangePasswordComponent } from './components/admin/changepassword/changepassword.component';
import { AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminProfileComponent } from './components/admin/profile/profile.component';
import { AdminRatingComponent } from './components/admin/rating/rating.component';
import { AdminSayComponent } from './components/admin/say/say.component';
import { AdminSubCategoriesComponent } from './components/admin/subcategories/subcategories.component';
import { AdminTeamComponent } from './components/admin/team/team.component';
import { AdminVideosComponent } from './components/admin/videos/videos.component';
import { AdminCoursesComponent } from './components/admin/courses/courses.component';
import { ModalComponent } from './components/skill-reach/modal/modal.component';
import { CourseComponent } from './components/skill-reach/courses/courses.component';
import { TutorAdminMessageComponent } from './components/team/adminmessage/message.component';
import { TutorPasswordComponent } from './components/team/changepassword/password.component';
import { TutorCourseComponent } from './components/team/course/course.component';
import { TutorHeaderComponent } from './components/team/header/header.component';
import { TutorProfileComponent } from './components/team/profile/profile.component';
import { TutorStudentMessageComponent } from './components/team/studentmessage/message.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { Commonserviceprovider } from '../providers/commomservice/commonservice';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    ServiceComponent,
    TopCategoriesComponent,
    TeamComponent,
    ModalComponent,
    ContactsComponent,
    FooterComponent,
    ContactusComponent,
    SideIconsComponent,
    VideosComponent,
    VideoComponent,
    AdminHeaderComponent,
    AdminStudentsComponent,
    AdminCategoriesComponent,
    AdminChangePasswordComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminRatingComponent,
    AdminSayComponent,
    AdminSubCategoriesComponent,
    AdminTeamComponent,
    AdminVideosComponent,
    AdminCoursesComponent,
    CourseComponent,
    TutorAdminMessageComponent, 
    TutorPasswordComponent, 
    TutorCourseComponent,
    TutorHeaderComponent,
    TutorProfileComponent,
    TutorStudentMessageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Commonserviceprovider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
