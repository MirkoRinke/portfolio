/**
 * @fileoverview Root component for bootstrapping the Angular application
 */

/**
 * Importing Component decorator from @angular/core.
 * Core decorator required to:
 * - Mark class as an Angular component
 * - Define component metadata and configuration
 * - Specify component properties like selector, template, styles
 * - Required for creating any Angular component
 */
import { Component } from '@angular/core';

/**
 * Importing RouterOutlet from @angular/router.
 * Core Angular router component that:
 * - Acts as a placeholder for rendering route components
 * - Displays content based on current route/URL
 * - Required for routing functionality in Angular apps
 * - Enables navigation between different views/components
 */
import { RouterOutlet } from '@angular/router';

/**
 * Component decorator configuration for AppComponent.
 * @Component defines the following metadata:
 * - selector: 'app-root' - The root component selector used in index.html
 * - standalone: true - Component is self-contained without NgModule
 * - imports: [RouterOutlet] - Required Angular router dependency
 * - templateUrl: Points to external HTML template file
 * - styleUrl: Points to external SCSS styles file
 *
 * This is the root component that bootstraps the Angular application
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
