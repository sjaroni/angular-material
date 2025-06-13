import { Component } from '@angular/core';
import {MatLineModule} from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CreateCourseStepOneComponent } from './create-course-step-one/create-course-step-one.component';
import { CreateCourseStepTwoComponent } from './create-course-step-two/create-course-step-two.component';

@Component({
  selector: 'app-create-course',
  imports: [
    MatStepperModule,
    MatButtonModule,
    CreateCourseStepOneComponent,
    CreateCourseStepTwoComponent,
  ],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss',
})
export class CreateCourseComponent {}
