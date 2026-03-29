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
  categories: Category[] = [
    { id: 1, name: 'Sport', description: 'Sehr lange Beschreibung...' },
    { id: 2, name: 'Technik', description: 'Noch längere Beschreibung...' },
    // ...
  ];

  categoryCtrl = new FormControl<string | Category>('');

  filteredCategories$ = this.categoryCtrl.valueChanges.pipe(
    startWith(''),
    map((value) => (typeof value === 'string' ? value : (value?.name ?? ''))),
    map((name) => this.filter(name)),
  );

  // 🔥 Neue Logik: ausgewählte Kategorie ODER passende Kategorie per Texteingabe
  get selectedCategory(): Category | null {
    const value = this.categoryCtrl.value;

    // Fall 1: echte Auswahl → value ist ein Objekt
    if (value && typeof value !== 'string') {
      return value;
    }

    // Fall 2: Texteingabe → prüfen, ob Name existiert
    if (typeof value === 'string' && value.trim().length > 0) {
      const match = this.categories.find(
        (c) => c.name.toLowerCase() === value.toLowerCase(),
      );
      return match ?? null;
    }

    return null;
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
