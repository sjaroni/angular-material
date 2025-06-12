import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  private descriptionription: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  courses: Course[] = [
    {
      id: 1,
      title: 'Complete Modern JavaScript Course',
      level: 'beginner',
      price: 499,
      description: this.descriptionription,
      image: '../../assets/courses/course1.jpg',
      rating: 4.5,
      duration: 18.2,
      author: 'Steve smith',
    },
    {
      id: 2,
      title: 'A complete Angular Course',
      level: 'beginner',
      price: 599,
      description: this.descriptionription,
      image: '../../assets/courses/course2.jpg',
      rating: 4.9,
      duration: 20.8,
      author: 'Sarah King',
    },
    {
      id: 3,
      title: 'A Complete Node JS Bootcamp',
      level: 'advanced',
      price: 449,
      description: this.descriptionription,
      image: '../../assets/courses/course3.jpg',
      rating: 3.7,
      duration: 16.6,
      author: 'Mark Vought',
    },
    {
      id: 4,
      title: 'A Complete React Developer Course',
      level: 'advanced',
      price: 599,
      description: this.descriptionription,
      image: '../../assets/courses/course4.jpg',
      rating: 4.8,
      duration: 28.2,
      author: 'Sarah King',
    },
    {
      id: 5,
      title: 'ASP.NET Core with Web API',
      level: 'beginner',
      price: 649,
      description: this.descriptionription,
      image: '../../assets/courses/course5.jpg',
      rating: 3.5,
      duration: 34.4,
      author: 'Steve smith',
    },
    {
      id: 6,
      title: 'Frontend Development with Vue.js',
      level: 'advanced',
      price: 329,
      description: this.descriptionription,
      image: '../../assets/courses/course6.jpg',
      rating: 4.5,
      duration: 17.7,
      author: 'Steve smith',
    },
    {
      id: 7,
      title: 'A Complete Python Bootcamp',
      level: 'beginner',
      price: 469,
      description: this.descriptionription,
      image: '../../assets/courses/course7.jpg',
      rating: 3.4,
      duration: 32.6,
      author: 'Mark Vought',
    },
    {
      id: 8,
      title: 'Machine Learning with Python',
      level: 'advanced',
      price: 1299,
      description: this.descriptionription,
      image: '../../assets/courses/course8.jpg',
      rating: 4.8,
      duration: 26.7,
      author: 'Sarah King',
    },
  ];
}
