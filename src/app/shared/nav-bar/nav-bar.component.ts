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

/**
 * Imports ColorToggleComponent from the local color-toggle directory.
 * @module ColorToggleComponent - Component that provides functionality to toggle color themes.
 */
import { ColorToggleComponent } from './color-toggle/color-toggle.component';

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
   * Subscription to track the active link changes.
   * This subscription is used to manage and clean up the active link state.
   *
   * @private
   */
  private activeLinkSubscription: Subscription | undefined;

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
   * Sets the active navigation link in the application.
   * Updates the currently active link through the navigation service.
   *
   * @param {string} link - The identifier/path of the link to be set as active
   * @returns {void}
   *
   * @example
   * setActiveLink('aboutMe'); // Sets the home link as active
   */
  setActiveLink(link: string): void {
    this.navigationService.setActiveLink(link);
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

    this.activeLinkSubscription = this.navigationService.activeLink$.subscribe(
      (link) => (this.activeLink = link)
    );
    this.loadTexts(this.languageService.getLanguage());
    this.initRouterEvents();
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
   */
  loadTexts(language: string): void {
    if (language === 'de') this.texts = textsDE;
    else if (language === 'en') this.texts = textsEN;
    else this.texts = textsEN;
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
   * @param {string} fragment - The fragment identifier of the section to scroll to.
   *
   * @example
   * Scroll to the section with the id 'about'
   * (click)="scrollToSection('contact')"
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
   * @param {string} fragment - The fragment identifier of the section to scroll to.
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
   * Scrolls directly to the specified fragment.
   *
   * @param {string} fragment - The fragment identifier of the section to scroll to.
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
   * @returns {boolean} `true` if the current route is the home route, otherwise `false`.
   */
  isHomeRoute(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/#');
  }
}
