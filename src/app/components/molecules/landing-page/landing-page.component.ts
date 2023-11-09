
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Course';
import { CoursesService } from 'src/app/services/courses.service';
import { catchError, of} from 'rxjs'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  courses: Course[] =[];
  


  constructor(private courseService: CoursesService){}
  ngOnInit(): void {
     this.courseService.getCourses().subscribe((courses)=>this.courses=courses);
    
  }

  onClickCourse(course: Course){
    this.courseService.getCourseById(course).pipe(catchError((error)=>{
    console.log(error);
    return of(error)
    })).subscribe()
    console.log("clicked")
  }

}
