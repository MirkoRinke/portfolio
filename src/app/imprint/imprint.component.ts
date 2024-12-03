/**
 * @fileoverview Contains the ImprintComponent which is responsible for displaying the imprint information
 * @module ImprintComponent
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
 * Imports the NavBarComponent from the shared navigation bar module
 * @imports {NavBarComponent} Component that renders the navigation bar UI
 * @moduleRelativePath '../shared/nav-bar/nav-bar.component'
 */
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';

/**
 * Imports the FooterComponent from the shared footer module
 * @imports {FooterComponent} Component that renders the footer UI
 * @moduleRelativePath '../shared/footer/footer.component'
 */
import { FooterComponent } from '../shared/footer/footer.component';

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
 * @Component Decorator that marks the class as an Angular component and provides metadata about the component.
 * @selector 'app-imprint' The CSS selector that identifies this component in a template.
 * @standalone true Indicates that this component is a standalone component.
 * @imports [NavBarComponent, FooterComponent] The components that this component imports.
 * @templateUrl './imprint.component.html' The URL to the component's template file.
 * @styleUrl './imprint.component.scss' The URL to the component's style file.
 */
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  /**
   * The language property represents the current language setting for the component.
   * It is initialized as an empty string and can be updated to reflect the desired language.
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
   * Constructs an instance of ImprintComponent.
   *
   * @param {LanguageService} languageService - The service used for handling language-related operations.
   */
  constructor(private languageService: LanguageService) {}

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Subscribes to the selected language observable from the language service and loads the corresponding texts.
   * Also loads the texts for the current language immediately.
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
   * Loads the texts based on the provided language.
   *
   * @param {string} language - The language code to load texts for.
   *                            Supported values are 'de' for German and 'en' for English.
   *                            Defaults to 'EN' if an unsupported language code is provided.
   */
  loadTexts(language: string) {
    if (language === 'de') this.language = 'DE';
    else if (language === 'en') this.language = 'EN';
    else this.language = 'EN';
  }
}
