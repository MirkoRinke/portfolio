/**
 * @fileoverview This file defines the PrivacyPolicyComponent, which includes the navigation bar, footer, and handles language-related operations.
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
 * Importing Router from Angular router:
 * - Used for navigation and routing within the application.
 * - Provides methods to navigate between different views or components.
 * - Essential for handling application routing logic.
 */
import { Router } from '@angular/router';

/**
 * Importing ViewportScroller from Angular common:
 * - Used to control scrolling of the viewport.
 * - Provides methods to scroll to specific positions or elements.
 * - Useful for implementing smooth scrolling and navigation.
 */
import { ViewportScroller } from '@angular/common';

/**
 * PrivacyPolicyComponent is responsible for displaying the privacy policy section of the application.
 * It is a standalone component.
 *
 * @component
 * @selector app-privacy-policy
 * @standalone true
 * @imports []
 * @templateUrl ./privacy-policy.component.html
 * @styleUrls ./privacy-policy.component.scss
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
   * Subscription to track changes in the language settings.
   * This subscription is used to update the component when the language changes.
   *
   * @private
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructs the PrivacyPolicyComponent.
   *
   * @param {LanguageService} languageService - Service to handle language translations.
   * @param {ViewportScroller} viewportScroller - Service to control scrolling of the viewport.
   * @param {Router} router - Angular Router service for navigation.
   */
  constructor(
    private languageService: LanguageService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes the language subscription to update texts based on the selected language.
   * Also loads the texts for the current language immediately.
   *
   * @memberof PrivacyPolicyComponent
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
   * This method unsubscribes from the language subscription to prevent memory leaks.
   * It checks if `languageSubscription` exists and if so, calls the `unsubscribe` method on it.
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
   *                            Defaults to 'EN' if an unsupported language code is provided.
   */
  loadTexts(language: string) {
    if (language === 'de') this.language = 'DE';
    else if (language === 'en') this.language = 'EN';
    else this.language = 'EN';
  }

  /**
   * Scrolls to a specific section of the page identified by the given fragment.
   *
   * This method first clears any existing fragment in the URL, then sets the new fragment
   * after a short delay to ensure the page scrolls to the correct section.
   *
   * @param {string} fragment - The fragment identifier of the section to scroll to.
   *
   * @returns {void}
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
