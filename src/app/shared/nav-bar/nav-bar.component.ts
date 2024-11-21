import { Component } from '@angular/core';

import { LanguageService } from '../services/language.service';
import { textsDE, textsEN } from './language';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  texts: any = {};

  constructor(private languageService: LanguageService) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * This method is used to perform any necessary initialization for the component.
   * In this case, it calls the `loadTexts` method to load necessary texts for the component.
   */
  ngOnInit() {
    this.loadTexts();
  }

  /**
   * Loads the appropriate text translations based on the selected language.
   *
   * This method retrieves the current language setting from the language service.
   * Depending on the selected language ('de' for German or 'en' for English), it assigns
   * the corresponding text translations to the `texts` property. If the selected language
   * is not recognized, it defaults to English translations.
   */
  loadTexts() {
    const selectedLanguage = this.languageService.getLanguage();
    if (selectedLanguage === 'de') this.texts = textsDE;
    else if (selectedLanguage === 'en') this.texts = textsEN;
    else this.texts = textsEN;
  }

  /**
   * Switches the application's language.
   *
   * This method sets the language using the language service and then reloads the texts
   * to reflect the change in language.
   *
   * @param {string} language - The language code to switch to (e.g., 'en', 'de', 'fr').
   */
  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.loadTexts();
  }
}
