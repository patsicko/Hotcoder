import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup', // Change the selector to 'app-signup'
  templateUrl: './signup.component.html', // Update the template file
  styleUrls: ['./signup.component.css'], // Update the CSS file
})
export class SignupComponent implements OnInit { // Change the class name to 'SignupComponent'
  signupForm: FormGroup; // Change the form name to 'signupForm'

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signupForm = this.fb.group({ // Change the form group name to 'signupForm'
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      const userData=this.signupForm.value;
      this.userService.addUser(userData).subscribe((addedUser)=>{
      console.log("user created", addedUser)
      })
      console.log('Form submitted:', this.signupForm.value);
    }
  }
}
