import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-course-step-two',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-course-step-two.component.html',
  styleUrl: './create-course-step-two.component.scss',
})
export class CreateCourseStepTwoComponent {
  readonly myReturnValue = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);
    // const dialogRef = this.dialog.open(DialogComponent, {
    //   data: {name: this.name(), animal: this.animal()},
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    // });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.myReturnValue.set(result);
      }
    });
  }
}
