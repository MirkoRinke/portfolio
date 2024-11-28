import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguageSubject = new BehaviorSubject<string>('de');

  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  constructor() {
    this.loadLanguageFromStorage();
  }

  setLanguage(language: string): void {
    this.selectedLanguageSubject.next(language);
    localStorage.setItem('selectedLanguage', language);
  }

  getLanguage(): string {
    return this.selectedLanguageSubject.value;
  }

  private loadLanguageFromStorage(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.selectedLanguageSubject.next(storedLanguage);
    }
  }
}
