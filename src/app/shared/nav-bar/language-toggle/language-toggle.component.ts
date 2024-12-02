/**
 * Importing Component decorator from @angular/core.
 * Core Angular decorator required to:
 * - Mark class as an Angular component
 * - Define component metadata and configuration
 * - Specify component properties like selector, template, styles
 * Used to set up the language toggle component
 */
import { Component } from '@angular/core';

/**
 * Importing CommonModule from @angular/common.
 * Required Angular module that provides:
 * - Common directives like *ngIf and *ngFor
 * - Pipes for data transformation
 * - Basic template functionality
 * Used to access core Angular features in the language toggle component
 */
import { CommonModule } from '@angular/common';

/**
 * Importing LanguageService to handle language switching functionality.
 * Service responsible for:
 * - Managing active language state
 * - Switching between supported languages (DE/EN)
 * - Broadcasting language changes to components
 * - Storing language preference
 */
import { LanguageService } from '../../services/language.service';

/**
 * Component decorator configuration for LanguageToggleComponent.
 * @Component defines the following metadata:
 * - selector: 'app-language-toggle' - HTML selector for inserting this component
 * - standalone: true - Component is self-contained without NgModule
 * - imports: [CommonModule] - Required Angular common directives/pipes
 * - templateUrl: Points to external HTML template file
 * - styleUrl: Points to external SCSS styles file
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
