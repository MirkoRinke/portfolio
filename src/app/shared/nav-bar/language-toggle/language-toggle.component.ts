import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

/**
 * Component for toggling the application's language.
 */
@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
})
export class LanguageToggleComponent {
  /**
   * Represents the current language selected in the application.
   */
  currentLanguage: string;

  /**
   * Constructs an instance of LanguageToggleComponent.
   * Initializes the current language from localStorage or defaults to 'de'.
   *
   * @param {LanguageService} languageService - The service used for language operations.
   */
  constructor(private languageService: LanguageService) {
    this.currentLanguage = localStorage.getItem('selectedLanguage') || 'de';
  }

  /**
   * Switches the application's language.
   * @param language - The language code to switch to.
   */
  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.languageService.setLanguage(language);
  }
}
