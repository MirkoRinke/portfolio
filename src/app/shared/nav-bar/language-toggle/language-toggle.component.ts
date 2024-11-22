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
   * The current language of the application.
   * Default is set to 'de' (German).
   */
  currentLanguage: string = 'de';

  /**
   * Constructs an instance of LanguageToggleComponent.
   * @param {LanguageService} languageService - Service to handle language operations.
   */
  constructor(private languageService: LanguageService) {}

  /**
   * Switches the application's language.
   * @param language - The language code to switch to.
   */
  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.languageService.setLanguage(language);
  }
}
