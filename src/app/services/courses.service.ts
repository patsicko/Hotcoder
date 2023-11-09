import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Course } from '../Course';

const httpOptions = {
  headers: {
    
    'Content-Type': 'application/json',
  },
};

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = "https://hotcoder-be.onrender.com/api/courses";
  private courses: Course[] = [];

  private courseSubject = new BehaviorSubject<Course[]>(this.courses);
  courseList = this.courseSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      tap((courses) => {
        this.courses = courses;
        this.courseSubject.next(this.courses);
      })
    );
  }

  getCourseById(course: Course): Observable<Course> {
    const url = `${this.apiUrl}/${course.id}`;
    return this.http.get<Course>(url);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/create`, course, httpOptions).pipe(
      tap((addedCourse) => {
        // this.courses.push(addedCourse);
        this.courseSubject.next(this.courses);
      })
    );
  }

  deleteCourse(course: Course): Observable<Course> {
    const url = `${this.apiUrl}/${course.id}`;
    return this.http.delete<Course>(url, httpOptions).pipe(
      tap(() => {
        this.courses = this.courses.filter((courseItem) => courseItem.id !== course.id);
        this.courseSubject.next(this.courses);
      })
    );
  }

  updateCourse(course: Course):Observable<Course>{
    const url=`${this.apiUrl}/${course.id}`;
    return this.http.put<Course>(url, course, httpOptions).pipe(
      tap(()=>{
        const index=this.courses.findIndex(courseItem=>courseItem.id === course.id);
        if(index !== -1){
          this.courses[index]=course;
          this.courseSubject.next(this.courses)
        }
      })
    )
  }

 
}
