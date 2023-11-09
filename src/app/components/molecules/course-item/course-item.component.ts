import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../../Course';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit{
  @Output() onDeleteCourse: EventEmitter<Course>= new EventEmitter();
  @Output() onEditCourse: EventEmitter<Course>= new EventEmitter();
  @Output() onUpdateCourse: EventEmitter<Course> = new EventEmitter()
  @Input() course: Course;

 
  ngOnInit(): void {
      
  }

  onRemove(course: Course): void{
    this.onDeleteCourse.emit(course);
    console.log(course)
  }

  onEdit(course: Course) {
   this.onEditCourse.emit(course);
   console.log("edit course",course)
  }
  
  onUpdate(course: Course){
    this.onUpdateCourse.emit(course);
    console.log("hello update",course)
  }
 




}
