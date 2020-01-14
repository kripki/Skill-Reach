import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/skill-reach/home/home.component';
import { TopCategoriesComponent } from './components/skill-reach/top-categories/top-categories.component';
import { TeamComponent } from './components/skill-reach/team/team.component';
import { ContactusComponent } from './components/skill-reach/contactus/contactus.component';
import { VideosComponent } from './components/skill-reach/video-page/video-page.component';
import { VideoComponent } from './components/skill-reach/video/video.component';
import { CourseComponent } from './components/skill-reach/courses/courses.component';
import { AdminHeaderComponent } from './components/admin/header/header.component';
import { TutorHeaderComponent } from './components/team/header/header.component';

const routes: Routes = [
    {path: 'skill-reach', component: HomeComponent},
    {path: 'skill-reach/categories', component: TopCategoriesComponent},
    {path: 'skill-reach/team', component: TeamComponent},
    {path: 'skill-reach/contact', component: ContactusComponent},
    {path: 'skill-reach/videos', component: VideosComponent},
    {path: 'skill-reach/video', component: VideoComponent},
    {path: 'skill-reach/courses', component: CourseComponent},
    {path: 'skill-reach/admin', component: AdminHeaderComponent},
    {path: 'skill-reach/tutor', component: TutorHeaderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }