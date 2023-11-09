import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  coursesLength: number;
  @ViewChild(CoursesComponent) coursesComponent!: CoursesComponent;
  
  
  constructor(private courseService: CoursesService) {
   
   }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses)=>{
      this.coursesLength=courses.length
    })
   
 
  }
  
 
}
