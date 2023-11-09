import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-author-field',
  templateUrl: './author-field.component.html',
  styleUrls: ['./author-field.component.css']
})
export class AuthorFieldComponent {
  @Input() placeholder:string='';
  @Input() formGroup!: FormGroup;
}
