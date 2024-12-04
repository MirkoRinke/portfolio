/**
 * @fileoverview This file defines the PrivacyPolicyComponent, which includes the navigation bar, footer, and handles language-related operations.
 */

/**
 * Importing Component decorator from @angular/core.
 * Core Angular decorator used to:
 * - Define component metadata and configuration
 * - Mark class as an Angular component
 * - Specify component properties like selector, template, styles
 * - Required for creating any Angular component
 */
import { Component } from '@angular/core';

/**
 * Imports the Subscription class from the RxJS library
 * @imports {Subscription} Class used to handle and manage subscriptions to observables
 * @module 'rxjs'
 */
import { Subscription } from 'rxjs';

/**
 * Imports the LanguageService from the shared services module
 * @imports {LanguageService} Service that handles language-related operations
 * @moduleRelativePath '../shared/services/language.service'
 */
import { LanguageService } from '../shared/services/language.service';

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
 * @Component Decorator that marks the class as an Angular component and provides metadata about the component.
 * @selector 'app-privacy-policy' The CSS selector that identifies this component in a template.
 * @standalone true Indicates that this component is a standalone component.
 * @imports [NavBarComponent, FooterComponent] The components that this component imports.
 * @templateUrl './privacy-policy.component.html' The URL to the component's template file.
 * @styleUrl './privacy-policy.component.scss' The URL to the component's style file.
 */
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  /**
   * Represents the language setting for the privacy policy component.
   * This property holds the current language as a string.
   */
  language: string = '';

  /**
   * Subscription to track changes in the selected language.
   * This subscription is used to update the component when the language changes.
   * It is initialized as undefined and will be assigned a value when the subscription is created.
   *
   * @private
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructs an instance of PrivacyPolicyComponent.
   *
   * @param languageService - Service to handle language-related operations.
   * @param viewportScroller - Service to control scrolling in the viewport.
   * @param router - Service to handle navigation and URL manipulation.
   */
  constructor(
    private languageService: LanguageService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Subscribes to the selected language observable from the language service and loads the corresponding texts.
   * Also loads the texts for the current language immediately upon initialization.
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
   *                            Accepts 'de' for German and 'en' for English.
   *                            Defaults to English if an unsupported language code is provided.
   */
  loadTexts(language: string) {
    if (language === 'de') this.language = 'DE';
    else if (language === 'en') this.language = 'EN';
    else this.language = 'EN';
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
