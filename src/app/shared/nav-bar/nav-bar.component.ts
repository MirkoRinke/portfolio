/**
 * Importing Component decorator from @angular/core.
 * Core Angular decorator used to:
 * - Define component metadata and configuration
 * - Mark class as an Angular component
 * - Required for creating components
 * - Allows specifying component selector, template, styles
 */
import { Component } from '@angular/core';

/**
 * Importing CommonModule from @angular/common.
 * Core Angular module that provides:
 * - Common directives (*ngIf, *ngFor etc)
 * - Pipes and other shared functionality
 * - Required for basic template features
 * Used to access core Angular features in templates
 */
import { CommonModule } from '@angular/common';

/**
 * Importing Subscription class from RxJS library.
 * Used for managing observable subscriptions:
 * - Handles cleanup of subscriptions to prevent memory leaks
 * - Essential for working with reactive streams in Angular
 * - Used here to manage language service subscription
 * - Will be cleaned up when component is destroyed
 */
import { Subscription } from 'rxjs';

/**
 * Importing ScrollService from shared services.
 * Used to handle scroll-related functionality:
 * - Manages scroll position and behavior
 * - Handles scroll locking/unlocking
 * - Provides scroll event handling
 * - Used for smooth scrolling to sections
 */
import { ScrollService } from '../services/scroll.service';

/**
 * Importing LanguageToggleComponent from language-toggle subdirectory.
 * Used as a child component to handle language switching:
 * - Provides UI control for toggling between languages
 * - Manages language selection state
 * - Emits language change events
 * - Integrated into navigation bar layout
 */
import { LanguageToggleComponent } from './language-toggle/language-toggle.component';

/**
 * Importing DomSanitizer and SafeHtml from @angular/platform-browser:
 * - DomSanitizer: Service for sanitizing values to ensure DOM safety
 * - SafeHtml: Type representing sanitized HTML content
 * Used to safely render dynamic HTML content like icons
 * Prevents XSS attacks while allowing necessary HTML/SVG content
 */
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Importing LanguageService to handle language switching functionality:
 * - Manages translation state between German and English
 * - Provides methods to switch languages
 * - Emits language change events for components to react
 * - Core service for application internationalization
 */
import { LanguageService } from '../services/language.service';

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
 * Component decorator configuration for NavBarComponent.
 * @Component defines the following metadata:
 * - selector: 'app-nav-bar' - The HTML selector used to insert this component
 * - standalone: true - Component is self-contained without NgModule
 * - imports: Required dependencies:
 *   - LanguageToggleComponent: For language switching functionality
 *   - CommonModule: For common Angular directives
 * - templateUrl: Points to external HTML template file
 * - styleUrl: Points to external SCSS styles file
 */
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LanguageToggleComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  /**
   * Holds the texts to be displayed in the "About Me" section of the main content.
   * The texts are assigned from the `textsDE` object, which contains the German translations.
   *
   * @type {Texts}
   */
  texts: Texts = textsDE;

  /**
   * Represents the currently active link in the navigation bar.
   * It can be a string indicating the active link or null if no link is active.
   */
  activeLink: string | null = null;

  /**
   * A boolean flag indicating whether the menu should be shown or hidden.
   * When set to `true`, the menu is displayed; when set to `false`, the menu is hidden.
   */
  showMenu = false;

  /**
   * Subscription to handle language changes.
   * This subscription is used to listen for changes in the application's language settings
   * and update the component accordingly.
   *
   * @private
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructs an instance of NavBarComponent.
   *
   * @param {LanguageService} languageService - Service to handle language-related operations.
   * @param {ScrollService} scrollService - Service to handle scroll-related operations.
   * @param {DomSanitizer} sanitizer - Service to sanitize HTML content.
   */
  constructor(
    private languageService: LanguageService,
    private scrollService: ScrollService,
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
   * Sets the active link in the navigation bar.
   *
   * @param link - The link to be set as active.
   */
  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  /**
   * Toggles the visibility of the menu. If the menu is currently shown, it will be closed.
   * Otherwise, it will be opened and scroll listeners will be added.
   */
  openMenu(): void {
    if (this.showMenu) {
      this.closeMenu();
      return;
    } else {
      this.showMenu = true;
      this.scrollService.addScrollListeners();
    }
  }

  /**
   * Closes the navigation menu by setting the `showMenu` property to `false`
   * and removes scroll listeners using the `scrollService`.
   */
  closeMenu(): void {
    this.showMenu = false;
    this.scrollService.removeScrollListeners();
  }

  /**
   * Angular lifecycle hook that is called after the component's view has been fully initialized.
   *
   * This method subscribes to the `selectedLanguage$` observable from the `languageService` to
   * listen for changes in the selected language and load the corresponding texts. It also
   * immediately loads the texts for the current language.
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
   * This method performs cleanup by unsubscribing from the languageSubscription
   * if it exists, to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Loads the appropriate text translations based on the provided language.
   *
   * @param {string} language - The language code to load texts for.
   *                            Supported values are 'de' for German and 'en' for English.
   *                            Defaults to English if an unsupported language code is provided.
   */
  loadTexts(language: string): void {
    if (language === 'de') this.texts = textsDE;
    else if (language === 'en') this.texts = textsEN;
    else this.texts = textsEN;
  }
}
