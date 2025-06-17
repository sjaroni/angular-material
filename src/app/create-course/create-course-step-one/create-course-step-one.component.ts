import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {
  MatDatepickerModule,
  MatCalendarCellClassFunction,
} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-create-course-step-one',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-course-step-one.component.html',
  styleUrl: './create-course-step-one.component.scss',
})
export class CreateCourseStepOneComponent {
  private fb: FormBuilder = inject(FormBuilder);

  toppings = new FormControl('');
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    category: ['beginner', Validators.required],
    courseType: ['premium', Validators.required],
    downloadAllowed: [false, Validators.requiredTrue],
    publishedAt: [new Date(), Validators.required],
  });

  get courseTitle() {
    return this.form.get('title');
  }

  higlightDate: MatCalendarCellClassFunction<Date> = (dateCell, view) => {
    const dayNumber = dateCell.getDate();
    if(view === 'month') {
      return (dayNumber === 2 || dayNumber === 5) ? 'highlight-date' : '';
    }
    // if(view === 'month' && dayNumber % 2 === 0) {
    //   return 'highlight-date';
    // }
    return '';
  };
}
