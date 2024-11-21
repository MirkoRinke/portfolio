/**
 * Angular decorator that marks a class as available to be provided and injected as a dependency.
 */
import { Injectable } from '@angular/core';

/**
 * Service to manage the application's language preference.
 *
 * @remarks
 * This service provides methods to set and get the selected language,
 * and persists the language preference in local storage.
 */
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguage: string = 'de';

  /**
   * Constructs an instance of the LanguageService.
   * Initializes the service by loading the language preference from storage.
   */
  constructor() {
    this.loadLanguageFromStorage();
  }

  /**
   * Sets the selected language and stores it in local storage.
   *
   * @param {string} language - The language to be set as the selected language.
   */
  setLanguage(language: string) {
    this.selectedLanguage = language;
    localStorage.setItem('selectedLanguage', language);
  }

  /**
   * Retrieves the currently selected language.
   *
   * @returns {string} The selected language.
   */
  getLanguage(): string {
    return this.selectedLanguage;
  }

  /**
   * Loads the selected language from local storage and sets it to the `selectedLanguage` property.
   * If no language is found in local storage, the `selectedLanguage` property remains unchanged.
   *
   * @private
   */
  private loadLanguageFromStorage() {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.selectedLanguage = storedLanguage;
    }
  }
}
