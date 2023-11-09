import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressFieldComponent } from './progress-field.component';

describe('ProgressFieldComponent', () => {
  let component: ProgressFieldComponent;
  let fixture: ComponentFixture<ProgressFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressFieldComponent]
    });
    fixture = TestBed.createComponent(ProgressFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
