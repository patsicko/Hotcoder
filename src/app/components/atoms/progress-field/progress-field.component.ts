import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-progress-field',
  templateUrl: './progress-field.component.html',
  styleUrls: ['./progress-field.component.css']
})
export class ProgressFieldComponent {
  @Input() placeholder:string='';
  @Input() formGroup!: FormGroup;

}
