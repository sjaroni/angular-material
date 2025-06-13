import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseStepOneComponent } from './create-course-step-one.component';

describe('CreateCourseStepOneComponent', () => {
  let component: CreateCourseStepOneComponent;
  let fixture: ComponentFixture<CreateCourseStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCourseStepOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCourseStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
