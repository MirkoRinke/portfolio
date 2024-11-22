import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service to manage the application's language settings.
 * Provides methods to set, get, and load the selected language.
 */
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   * A BehaviorSubject that holds the currently selected language.
   * Initialized with 'de' (German) as the default language.
   * @private
   */
  private selectedLanguageSubject = new BehaviorSubject<string>('de');

  /**
   * An observable that emits the currently selected language.
   */
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  /**
   * Initializes the LanguageService by loading the language settings from local storage.
   */
  constructor() {
    this.loadLanguageFromStorage();
  }

  /**
   * Sets the selected language and updates the local storage.
   *
   * @param {string} language - The language to set as selected.
   */
  setLanguage(language: string) {
    this.selectedLanguageSubject.next(language);
    localStorage.setItem('selectedLanguage', language);
  }

  /**
   * Retrieves the currently selected language.
   *
   * @returns {string} The currently selected language.
   */
  getLanguage(): string {
    return this.selectedLanguageSubject.value;
  }

  /**
   * Loads the selected language from local storage and updates the selectedLanguageSubject.
   * If a language is found in local storage, it is emitted to the selectedLanguageSubject.
   */
  private loadLanguageFromStorage() {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.selectedLanguageSubject.next(storedLanguage);
    }
  }
}
