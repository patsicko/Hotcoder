import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  coursesLength: number = 0;

 setCoursesLength(length:number) {
  this.coursesLength = length;
  }

  getCoursesLength(): number {
    return this.coursesLength;
  }

  constructor() { }
}
