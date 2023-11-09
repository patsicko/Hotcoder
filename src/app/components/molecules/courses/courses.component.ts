import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { onlyAlphabetical,onlyNumbers } from '../../../customValidator';
import { Course} from '../../../Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Output() onSaveCourse:EventEmitter<Course> = new EventEmitter()
  form: FormGroup;
  editMode:boolean=false;
  updateMode:boolean=false;
 

  constructor(private fb: FormBuilder) {
    this.form=this.fb.group({
      courseName:['',[Validators.required,onlyAlphabetical]],
      // progress:['',[Validators.required,onlyNumbers]],
      author:['',[Validators.required,onlyAlphabetical]],
      // courseNo:['', [Validators.required,onlyNumbers]],
      contents:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
 
  }

  onSubmitForm() {

    if(this.form.valid){
      const newCourse=this.form.value ;
      this.form.reset();
      this.clearControlErrors();
   
      this.onSaveCourse.emit(newCourse);

    } else{
      for (const controlName in this.form.controls) {
        if (this.form.controls.hasOwnProperty(controlName)) {
          const control = this.form.get(controlName);
          if (control && control.hasError('required')) {
            control.markAsTouched();
           
          }
        }
      };
      return;
    }
     
  }
  private clearControlErrors() {
    for (const controlName in this.form.controls) {
      if (this.form.controls.hasOwnProperty(controlName)) {
        const control = this.form.get(controlName);
        if (control && control.hasError('required')) {
          control.setErrors(null);
        }
      }
    }
  }

 
}



