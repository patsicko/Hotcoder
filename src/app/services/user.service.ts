import { Injectable } from '@angular/core';
import { LoginData, SignupData, Profile } from '../User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: {
    
    'Content-Type': 'application/json',
  },
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="https://hotcoder-be.onrender.com/api/user";

  private users:Profile[]= [];

  

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.url}/all`)
  }

  addUser(user:SignupData): Observable<SignupData> {
    return this.http.post<SignupData>(this.url, user, httpOptions);
  }

}
