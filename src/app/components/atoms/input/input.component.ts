import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() placeholder:string='';
  @Input() formGroup!: FormGroup;
  // @Input() type:string='';
  // @Input() placeholder:string ='';
  // @Input() fieldName:string=''
  
  //  formControlName= new FormControl();
 

  constructor(){}
  ngOnInit(): void {}

}
