import { Component, OnInit, ViewChild} from '@angular/core';
import { Course } from '../../../Course';
import {CoursesService } from '../../../services/courses.service';
import { CoursesComponent } from '../courses/courses.component';
import { Subscription, catchError, of } from 'rxjs';




@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.css']
})
export class CourseSectionComponent implements OnInit{
  courses: Course[] = [];
  @ViewChild(CoursesComponent) coursesComponent!:CoursesComponent;
  selectedCourse!: Course;
  private subscriptions: Subscription[] = [];
 


  constructor(private courseService:CoursesService){
   this.courseService.courseList.subscribe((courses)=>this.courses=courses)
  }

  ngOnInit(): void {
   
    
    this.courseService.getCourses().subscribe((courses)=> {
      this.courses = courses;
    });
  }


 
  addCourse(course: Course): void {
    if (!this.coursesComponent.editMode && !this.coursesComponent.updateMode) {
     
      this.courseService.addCourse(course).subscribe((newCourse) => {
        this.courses.push(newCourse);
        console.log("Course added successfully:", newCourse);
   
      });
      
    } else if(this.selectedCourse) {
      this.selectedCourse.courseName = course.courseName;
      this.selectedCourse.author = course.author;
      this.selectedCourse.contents = course.contents;
     
  
      this.courseService.updateCourse(this.selectedCourse).subscribe((editedCourse) => {
       this.selectedCourse=editedCourse
       
      });
  
      this.coursesComponent.editMode = false;
      this.coursesComponent.updateMode = false;
      
    }
  }
  
 
  
  deleteCourse(course: Course):void{
    this.courseService.deleteCourse(course).subscribe(()=>(
      this.courses=this.courses.filter(courseItem=>courseItem.id !== course.id)
    ))
  }

  editCourse(course: Course):void{
    console.log("edit is clicked");
     this.courseService.getCourseById(course).pipe(catchError((error)=>{
      console.log(error);
      return of(error)
     })).subscribe(selectedCourse=>{
      this.selectedCourse = selectedCourse;
      this.coursesComponent.form.setValue({
        courseName:selectedCourse.courseName,
        author:selectedCourse.author,
        contents:selectedCourse.contents
      })
      
     })
   
   this.coursesComponent.editMode=true;
  }
  

  updateProgress(course: Course){
    console.log("update is clicked",this.coursesComponent.updateMode);
    this.courseService.getCourseById(course).pipe(catchError((error)=>{
      console.log(error);
      return of(error)
    })).subscribe(selectedCourse=>{
      this.selectedCourse=selectedCourse;
      this.coursesComponent.form.setValue({
        courseName:selectedCourse.courseName,
        author:selectedCourse.author,
        contents:selectedCourse.contents
      })
      
     })


    const courseNameInput = document.querySelector('[formControlName="courseName"]');
     if (courseNameInput) {
     (courseNameInput as HTMLInputElement).readOnly = true;
     courseNameInput.classList.add("text-gray-500")
    }

    const outhorInput = document.querySelector('[formControlName="author"]');
     if (outhorInput) {
     (outhorInput as HTMLInputElement).readOnly = true;
     outhorInput.classList.add("text-gray-500")
    }

    this.coursesComponent.updateMode=true;
    
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
