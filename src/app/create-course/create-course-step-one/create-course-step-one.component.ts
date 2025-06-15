import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-create-course-step-one',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  ],
  templateUrl: './create-course-step-one.component.html',
  styleUrl: './create-course-step-one.component.scss',
})
export class CreateCourseStepOneComponent {
  private fb: FormBuilder = inject(FormBuilder);

  form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    category: ['beginner', Validators.required],
    courseType: ['premium', Validators.required],
    downloadAllowed: [false, Validators.required],
  });

  get courseTitle() {
    return this.form.get('title');
    // return this.form.controls['title'];
  }
}
