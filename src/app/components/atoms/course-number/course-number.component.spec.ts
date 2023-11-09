import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNumberComponent } from './course-number.component';

describe('CourseNumberComponent', () => {
  let component: CourseNumberComponent;
  let fixture: ComponentFixture<CourseNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseNumberComponent]
    });
    fixture = TestBed.createComponent(CourseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
