import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
  text: string = ''; // Initialize the text property with an empty string
  @Input() formGroup:FormGroup;
  @Input() placeholder:string

  // You can add methods and additional logic here
}
