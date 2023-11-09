import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginMessage, Profile } from 'src/app/User';
import { LoginService } from 'src/app/services/login.service';

let userProfile={};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginMessage: string;
  

  

  constructor(private fb: FormBuilder, private loginService: LoginService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const loginValue = this.loginForm.value;
      this.loginService.login(loginValue).subscribe(
        (response: LoginMessage) => {
          this.loginMessage = response.message;

         if(this.loginMessage=='success'){
          this.loginService.profile().subscribe(
            (response: Profile) => {
              userProfile = response;
              console.log("userProfile",userProfile);

              if (response.role === 'admin') {
                this.router.navigate(['/dashboard']); // Redirect to the admin dashboard
              } else if (response.role === 'user') {
                this.router.navigate(['/landingPage']); // Redirect to the landing page for regular users
              }
              
            },
            (error) => {
              console.error(' Profile failed:', error);
            }
          );
         }
          
       
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }
}
