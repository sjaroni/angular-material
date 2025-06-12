import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  imports: [MatTabsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  allCourses: Course[] = [];
  beginnerCourses: Course[] = [];
  advancedCourses: Course[] = [];

  courseService: CourseService = inject(CourseService);

  ngOnInit(): void {
    this.allCourses = this.courseService.courses;
    this.beginnerCourses = this.courseService.courses.filter(x => x.level === 'beginner');
    this.advancedCourses = this.courseService.courses.filter(x => x.level === 'advanced');
    
  }


}
