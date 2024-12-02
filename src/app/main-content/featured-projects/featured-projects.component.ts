/**
 * Importing Component decorator from @angular/core.
 * Core decorator that configures Angular component behavior:
 * - Required to define a class as an Angular component
 * - Allows specifying metadata like selector, template, styles
 * - Part of Angular's main module for core functionality
 */
import { Component } from '@angular/core';

/**
 * Importing Subscription class from RxJS library.
 * Used for managing observable subscriptions:
 * - Handles cleanup of subscriptions to prevent memory leaks
 * - Essential for working with reactive streams in Angular
 * - Enables proper component lifecycle management
 */
import { Subscription } from 'rxjs';

/**
 * Importing project data constants:
 * - projectsEN: Array containing project information in English
 * - projectsDE: Array containing project information in German
 * Used to display projects based on selected language preference
 * Contains the full project data like titles, descriptions, images, etc.
 */
import { projectsEN, projectsDE } from './projects.data';

/**
 * Importing ProjectModalComponent that displays detailed project information:
 * - Used as child component to show expanded project details
 * - Handles modal dialog display and interactions
 * - Contains project navigation and media display
 * - Manages modal open/close animations and states
 */
import { ProjectModalComponent } from './project-modal/project-modal.component';

/**
 * Importing ProjectService to handle project modal functionality:
 * - Manages modal state (open/closed)
 * - Controls currently selected project
 * - Handles project navigation within modal
 * - Provides shared service between featured projects and modal components
 */
import { ProjectService } from './modal.service';

/**
 * Importing ScrollService to handle scroll-related functionality:
 * - Manages scroll position and scrolling behavior
 * - Controls scroll locking when modal is open
 * - Handles scroll restoration when modal closes
 * - Provides methods for programmatic scrolling
 */
import { ScrollService } from '../../shared/services/scroll.service';

/**
 * Importing Project interface that defines the structure of project data:
 * - Provides type definition for project objects
 * - Ensures consistent project data shape across components
 * - Contains properties for title, description, images, technologies etc.
 * - Used for type checking and autocompletion
 */
import { Project } from './projects.data';

/**
 * Importing DomSanitizer and SafeHtml from @angular/platform-browser:
 * - DomSanitizer: Service for sanitizing potentially dangerous values
 * - SafeHtml: Type representing HTML content that has been sanitized
 * Used to safely render dynamic HTML content like project descriptions and icons
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
 * Component decorator configuration for FeaturedProjectsComponent.
 * @Component defines metadata that determines how the component should be processed:
 * - selector: 'app-featured-projects' - HTML element name to use this component
 * - standalone: true - Component is self-contained without NgModule
 * - imports: [ProjectModalComponent] - Required dependencies for this component
 * - templateUrl: Points to external HTML template file
 * - styleUrl: Points to external SCSS styles file
 */
@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjectsComponent {
  /**
   * Holds the texts to be displayed in the "About Me" section of the main content.
   * The texts are assigned from the `textsDE` object, which contains the German translations.
   *
   * @type {Texts}
   */
  texts: Texts = textsDE;

  /**
   * The ID of the project that is currently being hovered over.
   * This value is `null` if no project is being hovered.
   */
  hoveredProjectId: number | null = null;

  /**
   * Indicates whether the project modal is open or closed.
   *
   * @type {boolean}
   */
  projectModalOpen: boolean = false;

  /**
   * An array of Project objects representing the featured projects.
   * This array is initialized with the projectsDE data.
   */
  projects: Project[] = projectsDE;

  /**
   * Subscription to track changes in the selected language.
   * This subscription is used to handle any updates or changes
   * in the language settings within the application.
   *
   * @private
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Subscription object for managing the modal's observable.
   * This subscription is used to handle the lifecycle of the modal's events,
   * ensuring that resources are properly cleaned up when the component is destroyed.
   *
   * @private
   */
  private modalSubscription: Subscription | undefined;

  /**
   * Constructs an instance of FeaturedProjectsComponent.
   *
   * @param {LanguageService} languageService - Service to handle language-related operations.
   * @param {ProjectService} projectService - Service to manage project data.
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
   * Handles the mouse over event for a project.
   *
   * @param projectId - The ID of the project that is being hovered over.
   * @returns void
   */
  onMouseOver(projectId: number): void {
    this.hoveredProjectId = projectId;
  }

  /**
   * Event handler for the mouse leave event.
   * This method is triggered when the mouse pointer leaves the element.
   * It sets the `hoveredProjectId` property to `null`, indicating that no project is currently being hovered over.
   */
  onMouseLeave(): void {
    this.hoveredProjectId = null;
  }

  /**
   * Opens the project modal for the specified project.
   *
   * This method sets the current project in the project service,
   * opens the project modal, and disables scrolling on the page.
   *
   * @param {number} projectId - The ID of the project to open in the modal.
   *                             Note that the ID is decremented by 1 before being set.
   * @returns {void}
   */
  openProjectModal(projectId: number): void {
    this.projectService.setCurrentProject(projectId - 1);
    this.projectService.setProjectModalOpen(true);
    this.scrollService.disableScroll();
  }

  /**
   * Closes the project modal and re-enables scrolling on the page.
   *
   * This method sets the project modal's open state to false using the project service,
   * and then calls the scroll service to enable scrolling.
   *
   * @returns {void}
   */
  closeModal(): void {
    this.projectService.setProjectModalOpen(false);
    this.scrollService.enableScroll();
  }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes language and modal subscriptions.
   *
   * - Subscribes to the selected language observable from the language service and loads texts based on the selected language.
   * - Loads texts based on the current language from the language service.
   * - Subscribes to the project modal open observable from the project service and updates the project modal open state.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
    this.modalSubscription = this.projectService.projectModalOpen$.subscribe(
      (isOpen) => {
        this.projectModalOpen = isOpen;
      }
    );
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   *
   * This method performs cleanup by unsubscribing from any active subscriptions
   * to prevent memory leaks.
   *
   * Specifically, it checks if `languageSubscription` and `modalSubscription`
   * are active and unsubscribes from them if they are.
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  /**
   * Loads the texts and projects based on the specified language.
   *
   * @param {string} language - The language code ('de' for German, 'en' for English).
   *                            If the language is 'de', it loads German texts and projects.
   *                            If the language is 'en', it loads English texts and projects.
   *                            If the language is neither 'de' nor 'en', it defaults to loading English texts.
   * @returns {void}
   */
  loadTexts(language: string): void {
    if (language === 'de') (this.texts = textsDE), (this.projects = projectsDE);
    else if (language === 'en')
      (this.texts = textsEN), (this.projects = projectsEN);
    else this.texts = textsEN;
  }
}
