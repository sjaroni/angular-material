import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface Category {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [
    AsyncPipe,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  categoryCtrl = new FormControl<Category | null>(null);

  categories: Category[] = [
    { id: 1, name: 'Sport', description: 'Sehr lange Beschreibung...' },
    { id: 2, name: 'Technik', description: 'Noch längere Beschreibung...' },
    // ...
  ];

  filteredCategories$: Observable<Category[]>;

  get selectedCategory(): Category | null {
    return this.categoryCtrl.value;
  }

  constructor() {
    this.filteredCategories$ = this.categoryCtrl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : (value?.name ?? ''))),
      map((name) => this.filter(name)),
    );
  }

  displayCategory(cat: Category | null): string {
    return cat ? cat.name : '';
  }

  private filter(name: string): Category[] {
    const filterValue = name.toLowerCase();
    return this.categories.filter((c) =>
      c.name.toLowerCase().includes(filterValue),
    );
  }
}
