import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCourseComponent } from './empty-course.component';

describe('EmptyCourseComponent', () => {
  let component: EmptyCourseComponent;
  let fixture: ComponentFixture<EmptyCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyCourseComponent]
    });
    fixture = TestBed.createComponent(EmptyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
