import { Component, OnInit, ViewChild,  } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { CoursesService } from '../../../services/courses.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  coursesLength!:number
  @ViewChild(CoursesComponent) coursesComponent!:CoursesComponent;
  
   
  constructor(private courseService:CoursesService){
    
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses)=>{
      this.coursesLength=courses.length
    })
   
  }
  
  


}
