/**
 * @fileoverview This service manages the application's selected language state using RxJS BehaviorSubject and Observable.
 */

/**
 * Importing Injectable decorator from @angular/core.
 * Required to:
 * - Mark class as injectable service
 * - Enable dependency injection
 * - Allow service to be provided at root level
 * Core decorator for creating Angular services
 */
import { Injectable } from '@angular/core';

/**
 * Importing BehaviorSubject and Observable from rxjs.
 *
 * BehaviorSubject is used to hold the current value of the selected language.
 * Observable is used to allow other parts of the application to subscribe to language changes.
 */
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Injectable decorator configuration.
 * - providedIn: 'root' makes service available throughout the app
 * - Singleton instance created and managed by Angular's DI system
 * - More efficient than providing in individual modules
 * - Enables tree-shaking for better optimization
 */
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   * Private BehaviorSubject to manage the selected language state.
   * - Initialized with 'de' (German) as default language
   * - Holds current language value internally
   * - Enables reactive updates to language changes
   * - Only service can modify value directly via next()
   */
  private selectedLanguageSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('de');

  /**
   * An observable that emits the currently selected language.
   *
   * This observable is derived from the `selectedLanguageSubject` and can be used
   * to subscribe to changes in the selected language throughout the application.
   *
   * @type {Observable<string>}
   */
  selectedLanguage$: Observable<string> =
    this.selectedLanguageSubject.asObservable();

  /**
   * Constructs an instance of the LanguageService.
   * Initializes the service by loading the language settings from storage.
   */
  constructor() {
    this.loadLanguageFromStorage();
  }

  /**
   * Sets the current language for the application.
   *
   * This method updates the selected language by emitting a new value
   * through the `selectedLanguageSubject` and also stores the selected
   * language in the local storage to persist the user's preference.
   *
   * @param {string} language - The language code to set as the current language.
   *
   * @example
   * languageService.setLanguage('en');
   */
  setLanguage(language: string): void {
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
   * Loads the selected language from local storage and updates the selected language subject.
   * If a language is found in local storage, it will be set as the current selected language.
   *
   * @private
   */
  private loadLanguageFromStorage(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.selectedLanguageSubject.next(storedLanguage);
    }
  }
}
