/**
 * @fileoverview This file defines the SkillsComponent which displays and manages the skills section of the application.
 */

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
 * - Important for proper component lifecycle management
 * - Used here to manage language service subscription
 */
import { Subscription } from 'rxjs';

/**
 * Importing skills-related types and data:
 * - Skill: Interface defining structure of skill items
 * - TECH_SKILLS: Array of current technical skills
 * - LEARNING_SKILLS: Array of skills currently being learned
 * Used to display and manage skills in the skills section
 */
import { Skill, TECH_SKILLS, LEARNING_SKILLS } from './skills.data';

/**
 * Importing DomSanitizer and SafeHtml from @angular/platform-browser:
 * - DomSanitizer: Service for sanitizing values to ensure DOM safety
 * - SafeHtml: Type representing sanitized HTML content
 * Used to safely render dynamic HTML content like skill icons
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
 * Component decorator configuration for SkillsComponent.
 * @Component defines the following metadata:
 * - selector: 'app-skills' - The HTML selector used to insert this component
 * - standalone: true - Component is self-contained without NgModule
 * - imports: [] - Currently no dependencies needed
 * - templateUrl: Points to external HTML template file
 * - styleUrl: Points to external SCSS styles file for component styling
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  /**
   * Holds the texts to be displayed in the "About Me" section of the main content.
   * The texts are assigned from the `textsDE` object, which contains the German translations.
   *
   * @type {Texts}
   */
  texts: Texts = textsDE;

  /**
   * An array of skills representing the technical skills of the user.
   * This array is initialized with the constant `TECH_SKILLS`.
   *
   * @type {Skill[]}
   */
  skills: Skill[] = TECH_SKILLS;

  /**
   * An array of skills that are currently being learned.
   * This array is initialized with the constant `LEARNING_SKILLS`.
   */
  learningSkills: Skill[] = LEARNING_SKILLS;

  /**
   * Subscription to handle language changes.
   * This subscription is used to manage and clean up resources related to language changes.
   * It is initialized as undefined and will be assigned a value when the subscription is created.
   *
   * @private
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructs an instance of the SkillsComponent.
   *
   * @param {LanguageService} languageService - Service to handle language-related operations.
   * @param {DomSanitizer} sanitizer - Service to sanitize HTML content.
   */
  constructor(
    private languageService: LanguageService,
    private sanitizer: DomSanitizer,
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
   * Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Subscribes to the selectedLanguage$ observable from the languageService to load texts based on the selected language.
   * Also loads texts immediately based on the current language.
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
   * Loads the appropriate texts based on the specified language.
   *
   * @param {string} language - The language code ('de' for German, 'en' for English).
   *                            If the language code is not recognized, defaults to English texts.
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
