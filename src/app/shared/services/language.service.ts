import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { type Texts, textsDE, textsEN } from './language';
import { type Project, projectsDE, projectsEN } from './projects.data';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguageSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('de');

  selectedLanguage$: Observable<string> =
    this.selectedLanguageSubject.asObservable();

  texts: Texts = textsDE;
  projects: Project[] = projectsDE;

  constructor() {
    this.loadLanguageFromStorage();
    this.selectedLanguage$.subscribe(() => {
      this.updateTexts();
    });
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

  private updateTexts(): void {
    const language = this.getLanguage();
    if (language === 'de') (this.texts = textsDE), (this.projects = projectsDE);
    else if (language === 'en')
      (this.texts = textsEN), (this.projects = projectsEN);
    else (this.texts = textsEN), (this.projects = projectsEN);
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
