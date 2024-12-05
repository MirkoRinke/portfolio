/**
 * @fileoverview Imprint component for displaying legal information
 */

/**
 * Importing Component decorator from Angular core:
 * - Used to define an Angular component.
 * - Provides metadata about the component including its selector, template, and styles.
 */
import { Component } from '@angular/core';

/**
 * Importing Subscription from rxjs:
 * - Used to manage observable subscriptions.
 * - Helps prevent memory leaks through proper subscription cleanup.
 * - Essential for handling asynchronous operations and events.
 * - Important for managing component lifecycle and language service subscription.
 */
import { Subscription } from 'rxjs';

/**
 * Importing LanguageService to handle language switching functionality:
 * - Manages translation state between different languages.
 * - Provides methods to switch languages.
 * - Emits language change events for components to react.
 * - Core service for application internationalization.
 */
import { LanguageService } from '../shared/services/language.service';

/**
 * ImprintComponent is responsible for displaying the imprint section of the application.
 * It is a standalone component.
 *
 * @component
 * @selector app-imprint
 * @standalone true
 * @imports []
 * @templateUrl ./imprint.component.html
 * @styleUrls ./imprint.component.scss
 */
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  /**
   * Represents the language setting for the component.
   * This property holds the current language as a string.
   */
  language: string = '';

  /**
   * Subscription to track changes in the selected language.
   * This subscription is used to handle language change events and update the component accordingly.
   *
   * @private
   * @type {Subscription | undefined}
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Creates an instance of ImprintComponent.
   *
   * @param {LanguageService} languageService - The service used for handling language-related operations.
   */
  constructor(private languageService: LanguageService) {}

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Subscribes to the selected language observable from the language service and loads the corresponding texts.
   * Also loads the texts for the current language immediately.
   *
   * @memberof ImprintComponent
   */
  ngOnInit() {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   *
   * This method performs cleanup by unsubscribing from the languageSubscription
   * if it exists, to prevent memory leaks.
   */
  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Loads the texts based on the specified language.
   *
   * @param {string} language - The language code to load texts for.
   *                            Supported values are 'de' for German and 'en' for English.
   *                            Defaults to 'EN' if an unsupported value is provided.
   */
  loadTexts(language: string) {
    if (language === 'de') this.language = 'DE';
    else if (language === 'en') this.language = 'EN';
    else this.language = 'EN';
  }
}
