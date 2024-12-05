/**
 * @fileoverview This file defines the NavBarComponent, which is responsible for rendering the navigation bar of the application. It includes functionality for language toggling and smooth scrolling to different sections.
 */

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
 * Imports Angular's CommonModule
 * @module CommonModule - Provides common Angular directives and pipes like ngIf, ngFor, etc.
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
 */
import { RouterModule, Router } from '@angular/router';

/**
 * Imports ViewportScroller from Angular common package
 * @module ViewportScroller - Service that provides methods to control scrolling of the viewport
 * - Enables programmatic scrolling to specific positions
 * - Supports scrolling to anchors/elements
 * - Handles scroll position restoration during navigation
 */
import { ViewportScroller } from '@angular/common';

/**
 * Imports ColorToggleComponent from the local color-toggle directory.
 * @module ColorToggleComponent - Component that provides functionality to toggle color themes.
 */
import { ColorToggleComponent } from './color-toggle/color-toggle.component';

/**
 * NavBarComponent is responsible for displaying the navigation bar of the application.
 * It is a standalone component.
 *
 * @component
 * @selector app-nav-bar
 * @standalone true
 * @imports [LanguageToggleComponent, CommonModule, RouterModule, ColorToggleComponent]
 * @templateUrl ./nav-bar.component.html
 * @styleUrls ./nav-bar.component.scss
 */
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    LanguageToggleComponent,
    CommonModule,
    RouterModule,
    ColorToggleComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  /**
   * Holds the texts to be displayed in the navigation bar.
   * The texts are assigned from the `textsDE` object, which contains
   * the German translations for the navigation bar.
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
   * Subscription to track the active link changes.
   * This subscription is used to manage and clean up the active link state in the navigation bar component.
   *
   * @private
   * @type {Subscription | undefined}
   */
  private activeLinkSubscription: Subscription | undefined;

  /**
   * Subscription to track changes in the selected language.
   * This subscription is used to update the component when the language changes.
   *
   * @private
   * @type {Subscription | undefined}
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructs an instance of NavBarComponent.
   *
   * @param languageService - Service to handle language-related operations.
   * @param sanitizer - Service to sanitize HTML content.
   * @param navigationService - Service to manage navigation within the application.
   * @param viewportScroller - Service to control scrolling of the viewport.
   * @param router - Service to handle navigation and URL manipulation.
   */
  constructor(
    private languageService: LanguageService,
    private sanitizer: DomSanitizer,
    public navigationService: NavigationService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  /**
   * Returns a sanitized HTML icon based on the provided type.
   *
   * @param {string} type - The type of the icon to return.
   * @returns {SafeHtml} - The sanitized HTML of the icon.
   */
  public returnIcon(type: string): SafeHtml {
    const iconHtml = returnIcon(type);
    return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
  }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes subscriptions to language and navigation services to update component state accordingly.
   *
   * - Subscribes to `selectedLanguage$` observable from `languageService` to load texts based on the selected language.
   * - Subscribes to `activeLink$` observable from `navigationService` to update the active link state.
   * - Loads texts based on the current language from `languageService`.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.activeLinkSubscription = this.navigationService.activeLink$.subscribe(
      (link) => (this.activeLink = link)
    );
    this.loadTexts(this.languageService.getLanguage());
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   *
   * This method performs cleanup by unsubscribing from any active subscriptions
   * to prevent memory leaks.
   *
   * It checks if `languageSubscription` and `activeLinkSubscription` are defined,
   * and if so, unsubscribes from them.
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.activeLinkSubscription) {
      this.activeLinkSubscription.unsubscribe();
    }
  }

  /**
   * Loads the appropriate text translations based on the provided language.
   *
   * @param {string} language - The language code to load texts for.
   *                            Supported values are 'de' for German and 'en' for English.
   *                            Defaults to English if an unsupported language code is provided.
   * @returns {void}
   */
  loadTexts(language: string): void {
    if (language === 'de') this.texts = textsDE;
    else if (language === 'en') this.texts = textsEN;
    else this.texts = textsEN;
  }

  /**
   * Scrolls to a specific section of the page identified by the given fragment.
   * If the current route is not the home route, it navigates to the home route first and then scrolls to the fragment.
   * Otherwise, it directly scrolls to the fragment.
   *
   * @param {string} fragment - The identifier of the section to scroll to.
   * @returns {void}
   */
  scrollToSection(fragment: string): void {
    if (!this.isHomeRoute()) {
      this.navigateToHomeAndScroll(fragment);
    } else {
      this.scrollToFragment(fragment);
    }
  }

  /**
   * Navigates to the home route and then scrolls to the specified fragment.
   *
   * @param {string} fragment - The fragment identifier to scroll to after navigation.
   * @returns {void}
   */
  private navigateToHomeAndScroll(fragment: string): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.router.navigate([], {
          fragment: fragment,
        });
        this.viewportScroller.scrollToAnchor(fragment);
      }, 100);
    });
  }

  /**
   * Scrolls to a specific fragment within the page.
   *
   * This method first navigates to the current route with the fragment set to undefined
   * and then, after a short delay, navigates again with the specified fragment.
   * This ensures that the fragment is properly scrolled into view.
   *
   * @param {string} fragment - The fragment identifier to scroll to.
   * @private
   */
  private scrollToFragment(fragment: string): void {
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
   * Checks if the current route is the home route.
   *
   * @returns {boolean} True if the current route is the home route, otherwise false.
   */
  isHomeRoute(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/#');
  }
}
