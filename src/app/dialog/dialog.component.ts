import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateCourseStepTwoComponent } from '../create-course/create-course-step-two/create-course-step-two.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  readonly myReturnValue = signal('');
  readonly dialogRef = inject(MatDialogRef<CreateCourseStepTwoComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  name: string = '';

  onNoClick(): void {
    this.dialogRef.close();
  }
}
