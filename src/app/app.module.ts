import {MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';


import { AppComponent } from './app.component';
import { InputComponent } from './components/atoms/input/input.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { NavlinkComponent } from './components/molecules/navlink/navlink.component';
import { CoursesComponent } from './components/molecules/courses/courses.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { TextComponent } from './components/atoms/text/text.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { HomeComponent } from './components/templates/home/home.component';
import { IconsComponent } from './components/atoms/icons/icons.component';
import { CourseSectionComponent } from './components/molecules/course-section/course-section.component';
import { AuthorFieldComponent } from './components/atoms/author-field/author-field.component';
import { ProgressFieldComponent } from './components/atoms/progress-field/progress-field.component';
import { CourseNumberComponent } from './components/atoms/course-number/course-number.component';
import { CourseItemComponent } from './components/molecules/course-item/course-item.component';
import { ClassesComponent } from './components/molecules/classes/classes.component';
import { DashboardComponent } from './components/molecules/dashboard/dashboard.component';
import { EmptyCourseComponent } from './components/molecules/empty-course/empty-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextareaComponent } from './components/atoms/textarea/textarea.component';
import { LoginComponent } from './components/molecules/login/login.component';
import { SignupComponent } from './components/molecules/signup/signup.component';
import { UserListComponent } from './components/molecules/user-list/user-list.component';
import { LandingPageComponent } from './components/molecules/landing-page/landing-page.component';


const appRoutes: Routes=[
  {path:'dashboard', component:CourseSectionComponent},
  {path:'classes',component: ClassesComponent },
  {path:'', component: DashboardComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'userList', component: UserListComponent},
  {path:'landingPage', component: LandingPageComponent}
  
 
  
]


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    NavlinkComponent,
    CoursesComponent,
    LinkComponent,
    TextComponent,
    HeaderComponent,
    HomeComponent,
    IconsComponent,
    CourseSectionComponent,
    AuthorFieldComponent,
    ProgressFieldComponent,
    CourseNumberComponent,
    CourseItemComponent,
    ClassesComponent,
    DashboardComponent,
    EmptyCourseComponent,
    TextareaComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    NgCircleProgressModule.forRoot({
      "radius": 20,
      "space":-5,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 8,
      "showSubtitle":false,
      "animateTitle": false,
      "animationDuration": 1000,
      "showTitle": false,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "lazy": true}),
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
