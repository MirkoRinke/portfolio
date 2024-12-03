/**
 * @fileoverview Component for displaying the About Me section with language support
 */

/**
 * Importing Component decorator from @angular/core.
 * Core decorator that defines Angular component metadata:
 * - Required for creating components
 * - Allows configuring component properties like selector, template, styles
 * - Part of Angular's core module for fundamental functionality
 */
import { Component } from '@angular/core';

/**
 * Importing Subscription class from RxJS.
 * Used for managing and cleaning up observable subscriptions:
 * - Handles subscription lifecycle management
 * - Prevents memory leaks by proper unsubscribing
 * - Essential for working with reactive data streams in Angular
 */
import { Subscription } from 'rxjs';

/**
 * Importing DomSanitizer and SafeHtml from @angular/platform-browser:
 * - DomSanitizer: Service for sanitizing values to be safe to use in DOM
 * - SafeHtml: Type representing sanitized HTML content
 * Used to safely render dynamic HTML content like SVG icons
 */
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
 * Importing returnIcon function from svg.icons.service:
 * - Provides methods to load and sanitize SVG icons
 * - Returns icon markup as string that can be safely rendered
 * - Used for displaying icons in about-me component templates
 */
import { returnIcon } from '../../shared/services/svg.icons.service';

/**
 * Component decorator configuration for AboutMeComponent.
 * @Component defines the following metadata:
 * - selector: 'app-about-me' - The HTML selector used to reference this component
 * - standalone: true - Component is self-contained without requiring NgModule
 * - imports: [] - Currently no dependencies needed
 * - templateUrl: Points to external HTML template file
 * - styleUrl: Points to external SCSS styles file for component-specific styling
 */
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  /**
   * Holds the texts to be displayed in the "About Me" section of the main content.
   * The texts are assigned from the `textsDE` object, which contains the German translations.
   *
   * @type {Texts}
   */
  texts: Texts = textsDE;

  /**
   * Boolean flag indicating whether the element is currently being hovered over by the user.
   * Used to track hover state for UI interactions.
   */
  isHovered: boolean = false;

  /**
   * Subscription object that manages the language selection subscription.
   * Used to handle cleanup and prevent memory leaks when component is destroyed.
   * @private
   * @type {Subscription | undefined}
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Creates an instance of AboutMeComponent.
   *
   * @constructor
   * @param {LanguageService} languageService - Service for handling language-related functionality
   * @param {DomSanitizer} sanitizer - Angular's DomSanitizer service for sanitizing HTML content
   */
  constructor(
    private languageService: LanguageService,
    private sanitizer: DomSanitizer
  ) {}

  /**
   * Returns a sanitized HTML representation of an icon based on the provided type.
   *
   * @param {string} type - The type/name of the icon to return
   * @returns {SafeHtml} A sanitized HTML string containing the icon markup
   *
   * @example
   * returnIcon('github') // Returns sanitized HTML for github icon
   */
  public returnIcon(type: string): SafeHtml {
    const iconHtml = returnIcon(type);
    return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
  }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Subscribes to language changes and loads texts based on the selected language.
   *
   * The subscription is stored in languageSubscription to allow proper cleanup.
   * Initial text loading is done with the current language setting.
   *
   * @implements OnInit
   */
  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  /**
   * Lifecycle hook that is called when the component is about to be destroyed.
   * Unsubscribes from the language subscription to prevent memory leaks.
   *
   * @implements OnDestroy
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Loads the appropriate text content based on the selected language.
   *
   * @param language - The language code ('de' for German, 'en' for English)
   * @returns void
   *
   * @remarks
   * If an unsupported language code is provided, it defaults to English texts
   */
  loadTexts(language: string): void {
    if (language === 'de') this.texts = textsDE;
    else if (language === 'en') this.texts = textsEN;
    else this.texts = textsEN;
  }
}
