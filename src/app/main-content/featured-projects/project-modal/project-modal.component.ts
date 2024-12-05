/**
 * @fileoverview This file contains the ProjectModalComponent which manages the project modal's state, visibility, and interactions.
 */

/**
 * Angular core imports
 * @module @angular/core
 *
 * @description
 * - Component: Decorator that marks a class as an Angular component and provides configuration metadata.
 * - HostListener: Decorator that declares a DOM event to listen for and provides a handler method to run when that event occurs.
 */
import { Component, HostListener } from '@angular/core';

/**
 * Importing Subscription class from RxJS library.
 * Used for managing and cleaning up observable subscriptions:
 * - Handles subscription lifecycle management
 * - Prevents memory leaks by proper unsubscribing
 * - Essential for working with reactive data streams in Angular
 */
import { Subscription } from 'rxjs';

/**
 * Importing project data constants in English and German:
 * - projectsEN: Array containing project information in English
 * - projectsDE: Array containing project information in German
 * Used to display project details based on selected language
 */
import { projectsEN, projectsDE } from './../projects.data';

/**
 * Importing ProjectService from modal service:
 * - Handles project modal state management
 * - Controls modal visibility and animations
 * - Manages currently selected project data
 * - Provides methods for modal interactions and navigation
 */
import { ProjectService } from '../modal.service';

/**
 * Importing ScrollService to manage scroll behavior and state:
 * - Handles scroll position tracking and restoration
 * - Controls scroll locking when modal is open
 * - Manages scroll-related events and animations
 * - Provides methods for programmatic scrolling
 */
import { ScrollService } from '../../../shared/services/scroll.service';

/**
 * Importing Project interface that defines the structure of project data:
 * - Type definition for project objects
 * - Ensures consistent project data structure
 * - Used for type checking throughout modal component
 * - Contains properties like title, description, technologies, etc.
 */
import { Project } from './../projects.data';

/**
 * Importing DomSanitizer and SafeHtml from @angular/platform-browser:
 * - DomSanitizer: Service for sanitizing values to be safe to use in DOM
 * - SafeHtml: Type for representing sanitized HTML content
 * Used to safely render dynamic HTML content like project descriptions and icons
 */
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Importing LanguageService to handle language switching functionality:
 * - Manages translation state between German and English
 * - Provides methods to switch languages
 * - Emits language change events for components to react
 * - Core service for application internationalization
 */
import { LanguageService } from '../../../shared/services/language.service';

/**
 * Importing returnIcon function from svg.icons.service:
 * - Provides methods to load and sanitize SVG icons
 * - Returns icon markup as string that can be safely rendered
 * - Used for displaying icons in about-me component templates
 */
import { returnIcon } from '../../../shared/services/svg.icons.service';

/**
 * ProjectModalComponent is responsible for displaying the project modal section of the application.
 * It is a standalone component.
 *
 * @component
 * @selector app-project-modal
 * @standalone true
 * @imports []
 * @templateUrl ./project-modal.component.html
 * @styleUrls ./project-modal.component.scss
 */
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  /**
   * An array of projects to be displayed in the project modal.
   * This array is initialized with the German projects data.
   *
   * @type {Project[]}
   */
  projects: Project[] = projectsDE;

  /**
   * The index of the currently selected project.
   *
   * @type {number}
   */
  currentProject: number = 0;

  /**
   * Subscription to track changes in the selected language.
   * This subscription is used to update the component when the language changes.
   * It is initialized as undefined and will be assigned a value when the subscription is created.
   *
   * @private
   * @type {Subscription | undefined}
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Subscription object to manage the lifecycle of project-related observables.
   * This subscription is used to handle the asynchronous operations related to projects
   * and ensures proper cleanup to prevent memory leaks.
   *
   * @private
   * @type {Subscription | undefined}
   */
  private projectSubscription: Subscription | undefined;

  /**
   * Constructs an instance of ProjectModalComponent.
   *
   * @param {LanguageService} languageService - Service to handle language-related operations.
   * @param {ProjectService} projectService - Service to manage project-related data and operations.
   * @param {ScrollService} scrollService - Service to handle scrolling functionality.
   * @param {DomSanitizer} sanitizer - Service to sanitize HTML content.
   */
  constructor(
    private languageService: LanguageService,
    private projectService: ProjectService,
    private scrollService: ScrollService,
    private sanitizer: DomSanitizer
  ) {}

  /**
   * Returns a sanitized HTML icon based on the provided type.
   *
   * @param {string} type - The type of icon to return.
   * @returns {SafeHtml} - The sanitized HTML of the icon.
   */
  public returnIcon(type: string): SafeHtml {
    const iconHtml = returnIcon(type);
    return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
  }

  /**
   * Opens a new browser tab with the specified URL.
   *
   * @param {string} url - The URL to open in a new tab.
   * @returns {void}
   */
  openLink(url: string): void {
    window.open(url, '_blank');
  }

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Subscribes to language changes and project changes to update the component state accordingly.
   *
   * - Subscribes to the `selectedLanguage$` observable from `languageService` to load texts based on the selected language.
   * - Loads texts immediately based on the current language from `languageService`.
   * - Subscribes to the `currentProject$` observable from `projectService` to update the current project ID.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
    this.projectSubscription = this.projectService.currentProject$.subscribe(
      (projectId) => {
        this.currentProject = projectId;
      }
    );
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   *
   * This method performs cleanup by unsubscribing from any active subscriptions
   * to prevent memory leaks.
   *
   * - Unsubscribes from `languageSubscription` if it exists.
   * - Unsubscribes from `projectSubscription` if it exists.
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.projectSubscription) {
      this.projectSubscription.unsubscribe();
    }
  }

  /**
   * Loads the project texts based on the specified language.
   *
   * @param {string} language - The language code ('de' for German, 'en' for English).
   * @returns {void}
   */
  loadTexts(language: string): void {
    if (language === 'de') this.projects = projectsDE;
    else if (language === 'en') this.projects = projectsEN;
  }

  /**
   * Closes the project modal by setting the modal state to closed and re-enabling scrolling.
   *
   * This method performs the following actions:
   * 1. Sets the project modal state to closed by calling `setProjectModalOpen(false)` on the `projectService`.
   * 2. Re-enables scrolling by calling `enableScroll()` on the `scrollService`.
   *
   * @returns {void} This method does not return a value.
   */
  closeModal(): void {
    this.projectService.setProjectModalOpen(false);
    this.scrollService.enableScroll();
  }

  /**
   * Advances to the next project in the list. If the current project is not the last one,
   * it increments the current project index by one. If the current project is the last one,
   * it wraps around and sets the current project index to zero.
   *
   * @returns {void}
   */
  nextProject(): void {
    if (this.currentProject < this.projects.length - 1) {
      this.projectService.setCurrentProject(this.currentProject + 1);
    } else {
      this.projectService.setCurrentProject(0);
    }
  }

  /**
   * Navigates to the previous project in the list.
   * If the current project is the first one, it wraps around to the last project.
   *
   * @returns {void}
   */
  previousProject(): void {
    if (this.currentProject > 0) {
      this.projectService.setCurrentProject(this.currentProject - 1);
    } else {
      this.projectService.setCurrentProject(this.projects.length - 1);
    }
  }

  /**
   * Listens for keydown events on the window and handles navigation between projects.
   * If the right arrow key is pressed, it navigates to the next project.
   * If the left arrow key is pressed, it navigates to the previous project.
   *
   * @param {KeyboardEvent} event - The keyboard event triggered by the keydown action.
   */
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextProject();
    } else if (event.key === 'ArrowLeft') {
      this.previousProject();
    }
  }
}
