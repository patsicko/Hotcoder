import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-number',
  templateUrl: './course-number.component.html',
  styleUrls: ['./course-number.component.css']
})
export class CourseNumberComponent {
  @Input() placeholder:string='';
  @Input() formGroup!: FormGroup;
  
}

