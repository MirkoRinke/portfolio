/**
 * @fileoverview This file defines the HeroComponent which displays and manages the hero section of the application, including the banner and side elements.
 */

/**
 * Importing Component decorator from @angular/core.
 * Core Angular decorator that:
 * - Defines metadata for component configuration
 * - Marks class as an Angular component
 * - Required for creating components
 * - Allows setting selector, template, styles etc.
 */
import { Component } from '@angular/core';

/**
 * Importing Subscription class from RxJS library.
 * Used for managing observable subscriptions:
 * - Enables proper cleanup of subscriptions
 * - Prevents memory leaks in components
 * - Essential for reactive programming in Angular
 */
import { Subscription } from 'rxjs';

/**
 * Importing HeroBannerComponent:
 * - Provides hero section banner display
 * - Contains main hero content and animations
 * - Used as child component in hero section
 * - Displays headline, intro text and hero imagery
 */
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';

/**
 * Importing HeroSideElementsComponent:
 * - Provides side elements for hero section
 * - Contains social media links and decorative elements
 * - Used as child component in hero layout
 * - Positioned along sides of hero section
 */
import { HeroSideElementsComponent } from '../hero-side-elements/hero-side-elements.component';

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
 * Imports Router from @angular/router package.
 * Router enables navigation between views and components in Angular app.
 * Used to navigate to different sections of the page.
 */
import { Router } from '@angular/router';

/**
 * Imports ViewportScroller from Angular common package
 * @module ViewportScroller - Service that provides methods to control scrolling of the viewport
 * - Enables programmatic scrolling to specific positions
 * - Supports scrolling to anchors/elements
 * - Handles scroll position restoration during navigation
 */
import { ViewportScroller } from '@angular/common';

/**
 * Component decorator configuration for HeroComponent.
 * @Component defines the following metadata:
 * - selector: 'app-hero' - The HTML selector used to insert this component
 * - standalone: true - Component is self-contained without NgModule dependencies
 * - imports: Required child components:
 *   - NavBarComponent: Navigation bar component
 *   - HeroBannerComponent: Main hero banner content
 *   - HeroSideElementsComponent: Side elements and decorations
 * - templateUrl: Points to external HTML template file
 * - styleUrl: Points to external SCSS styles file
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroBannerComponent, HeroSideElementsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
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
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructs an instance of the HeroComponent.
   *
   * @param {LanguageService} languageService - The service used for handling language-related operations.
   */
  constructor(
    private languageService: LanguageService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Subscribes to the selected language observable from the language service and loads the texts
   * based on the current language.
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
   * Unsubscribes from the languageSubscription if it exists to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Loads the appropriate text content based on the specified language.
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
}
