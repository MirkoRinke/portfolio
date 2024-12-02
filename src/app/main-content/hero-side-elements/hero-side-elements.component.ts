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
 * Importing DomSanitizer and SafeHtml from @angular/platform-browser:
 * - DomSanitizer: Service for sanitizing values to be safe to use in DOM
 * - SafeHtml: Type representing sanitized HTML content
 * Used to safely render SVG icons and other dynamic HTML content
 * Prevents XSS attacks while allowing necessary HTML/SVG content
 */
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Importing returnIcon function from svg.icons.service:
 * - Provides methods to load and sanitize SVG icons
 * - Returns icon markup as string that can be safely rendered
 * - Used for displaying icons in about-me component templates
 */
import { returnIcon } from '../../shared/services/svg.icons.service';

/**
 * Component decorator configuration for HeroSideElementsComponent.
 * @Component defines the following metadata:
 * - selector: 'app-hero-side-elements' - HTML selector to insert this component
 * - standalone: true - Component is self-contained without NgModule
 * - imports: [] - No dependencies needed currently
 * - templateUrl: Points to external HTML template file
 * - styleUrl: Points to external SCSS styles file for component styling
 */
@Component({
  selector: 'app-hero-side-elements',
  standalone: true,
  imports: [],
  templateUrl: './hero-side-elements.component.html',
  styleUrl: './hero-side-elements.component.scss',
})
export class HeroSideElementsComponent {
  /**
   * Constructs an instance of HeroSideElementsComponent.
   *
   * @param sanitizer - An instance of DomSanitizer used to sanitize HTML content.
   */
  constructor(private sanitizer: DomSanitizer) {}

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
}
