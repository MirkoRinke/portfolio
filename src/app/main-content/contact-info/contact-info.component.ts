/**
 * Importing Component decorator from Angular core:
 * - Used to define an Angular component.
 * - Provides metadata about the component including its selector, template, and styles.
 */
import { Component } from '@angular/core';

/**
 * Importing Subscription from rxjs:
 * - Used to manage observable subscriptions
 * - Helps prevent memory leaks through proper subscription cleanup
 * - Essential for handling asynchronous operations and events
 * Important for managing component lifecycle and language service subscription
 */
import { Subscription } from 'rxjs';

/**
 * Importing LanguageService to handle language switching functionality:
 * - Manages translation state between German and English
 * - Provides methods to switch languages
 * - Emits language change events for components to react
 * - Core service for application internationalization
 */
import { LanguageService } from '../../shared/services/language.service';

/**
 * Importing language-related interfaces and constants:
 * - Texts: Interface defining structure of text content
 * - textsDE: German translation text content
 * - textsEN: English translation text content
 * Used to support multi-language functionality in About Me section
 */
import { Texts, textsDE, textsEN } from './language';

/**
 * ContactInfoComponent is responsible for displaying the contact information section of the application.
 * It is a standalone component.
 *
 * @component
 * @selector app-contact-info
 * @standalone true
 * @imports []
 * @templateUrl ./contact-info.component.html
 * @styleUrls ./contact-info.component.scss
 */
@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})
export class ContactInfoComponent {
  /**
   * Holds the texts to be displayed in the "About Me" section of the main content.
   * The texts are assigned from the `textsDE` object, which contains the German translations.
   *
   * @type {Texts}
   */
  texts: Texts = textsDE;

  /**
   * Subscription to track changes in the selected language.
   * This subscription is used to update the component when the language changes.
   * It is initialized as undefined and will be assigned when the subscription is created.
   *
   * @private
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructs an instance of the ContactComponent.
   *
   * @param {LanguageService} languageService - The service used for handling language-related operations.
   */
  constructor(private languageService: LanguageService) {}

  /**
   * Angular lifecycle hook that is called after the component's view has been fully initialized.
   *
   * This method subscribes to the `selectedLanguage$` observable from the `languageService` to
   * dynamically load texts based on the selected language. It also loads the texts for the
   * current language immediately upon initialization.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   *
   * This method unsubscribes from the languageSubscription if it exists,
   * to prevent memory leaks and ensure proper cleanup.
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Loads the appropriate text content based on the provided language.
   *
   * @param {string} language - The language code to load texts for.
   *                            Supported values are 'de' for German and 'en' for English.
   *                            Defaults to English if an unsupported language code is provided.
   *
   * @returns {void}
   */
  loadTexts(language: string): void {
    if (language === 'de') this.texts = textsDE;
    else if (language === 'en') this.texts = textsEN;
    else this.texts = textsEN;
  }
}
