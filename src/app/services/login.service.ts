import { Injectable } from '@angular/core';
import { LoginData , LoginMessage, Profile} from '../User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

 let httpOptions = {
  withCredentials: true,
  headers: {
    
    'Content-Type': 'application/json',

   
  },
};

let userProfile={}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url="http://localhost:8000/api/user";

  constructor(private http:HttpClient) { }

  login(loginData: LoginData): Observable<LoginMessage> {
    const loginResponse= this.http.post<LoginMessage>(`${this.url}/login`, loginData, httpOptions);
     
    return loginResponse
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }


  profile():Observable<Profile>{

  
  


    return this.http.get<Profile>(`${this.url}`,{
      withCredentials: true, 
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': `Bearer ${this.getCookie('jwt')}` 
      },
    })
  }
}
