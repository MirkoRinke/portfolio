/**
 * Importing Component decorator from @angular/core.
 * Core Angular decorator that:
 * - Defines component metadata and configuration
 * - Marks class as an Angular component
 * - Required for creating components
 * - Allows specifying component selector, template, styles
 */
import { Component } from '@angular/core';

/**
 * Importing Subscription class from RxJS library.
 * Used for managing observable subscriptions:
 * - Handles cleanup of subscriptions to prevent memory leaks
 * - Essential for working with reactive streams in Angular
 * - Used here to manage language service subscription
 */
import { Subscription } from 'rxjs';

/**
 * Importing DomSanitizer and SafeHtml from @angular/platform-browser:
 * - DomSanitizer: Service for sanitizing values to be safe to use in DOM
 * - SafeHtml: Type representing sanitized HTML content
 * Used to safely render dynamic HTML content like icons and formatted text
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
 * Import of the NavigationService which handles application navigation and routing
 * @module NavigationService
 * @description Service responsible for managing navigation state and route transitions
 * @requires '../services/navigation.service'
 */
import { NavigationService } from '../services/navigation.service';

/**
 * Imports Angular routing related modules and services
 * @module RouterModule - Module for configuring and managing routes
 * @module Router - Service for navigating between views
 * @module NavigationEnd - Event emitted when navigation ends successfully
 */
import { RouterModule, Router, NavigationEnd } from '@angular/router';

/**
 * Imports RxJS operator
 * @module filter - Operator that filters values emitted by source Observable based on predicate function
 */
import { filter } from 'rxjs/operators';

/**
 * Imports ViewportScroller from Angular common package
 * @module ViewportScroller - Service that provides methods to control scrolling of the viewport
 * - Enables programmatic scrolling to specific positions
 * - Supports scrolling to anchors/elements
 * - Handles scroll position restoration during navigation
 */
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  /**
   * Holds the texts to be displayed in the "About Me" section of the main content.
   * The texts are assigned from the `textsDE` object, which contains the German translations.
   *
   * @type {Texts}
   */
  texts: Texts = textsDE;

  /**
   * Subscription to track changes in the selected language.
   * This subscription is used to handle any updates or changes
   * to the language settings within the application.
   *
   * @private
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructs an instance of FooterComponent.
   *
   * @param {LanguageService} languageService - Service to handle language-related operations.
   * @param {DomSanitizer} sanitizer - Service to sanitize HTML content.
   */
  constructor(
    private languageService: LanguageService,
    private sanitizer: DomSanitizer,
    public navigationService: NavigationService,
    private viewportScroller: ViewportScroller,
    private router: Router
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
   * Resets the active navigation link to its default state.
   * Clears the currently active link through the navigation service.
   *
   * @returns {void}
   *
   * @example
   * resetActiveLink(); // Resets the active navigation link to default
   */
  resetActiveLink(): void {
    this.navigationService.resetActiveLink();
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
   * Unsubscribes from the language subscription to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Loads the appropriate texts based on the provided language.
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

  /**
   * Gets the current year.
   *
   * @returns {number} The current year.
   */
  getYear(): number {
    return new Date().getFullYear();
  }

  /**
   * Initializes the router events to handle navigation end events.
   *
   * This method sets up a subscription to the router's events observable,
   * filtering for `NavigationEnd` events. When a `NavigationEnd` event occurs,
   * it checks if the URL contains a fragment (indicated by a `#` symbol).
   * If a fragment is present, it scrolls to the corresponding anchor in the view
   * after a short delay.
   *
   * @private
   */
  private initRouterEvents(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe(() => {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(fragment);
          }, 100);
        }
      });
  }

  /**
   * Scrolls to a specific section of the page identified by the given fragment.
   *
   * This method first clears any existing fragment in the URL, then sets a new fragment
   * after a short delay to ensure the page scrolls to the correct section.
   *
   * @param {string} fragment - The fragment identifier of the section to scroll to.
   *
   * @example
   * Scroll to the section with the id 'about'
   * (click)="scrollToSection('contact')"
   */
  scrollToSection(fragment: string): void {
    this.router
      .navigate([], {
        fragment: undefined,
        replaceUrl: true,
      })
      .then(() => {
        setTimeout(() => {
          this.router.navigate([], {
            fragment: fragment,
          });
          this.viewportScroller.scrollToAnchor(fragment);
        }, 10);
      });
  }

  /**
   * Scrolls the viewport to the top of the page.
   * Utilizes the `viewportScroller` service to scroll to the position [0, 0].
   */
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  /**
   * Checks if the current route is the home route.
   *
   * @returns {boolean} `true` if the current route is the home route, otherwise `false`.
   */
  isHomeRoute(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/#');
  }
}
