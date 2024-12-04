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
 * Imports Angular's CommonModule
 * @module CommonModule - Provides common Angular directives and pipes like ngIf, ngFor, etc.
 */
import { CommonModule } from '@angular/common';

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
 * Importing NavBarComponent from shared/nav-bar/nav-bar.component.
 * Component that displays the navigation bar at the top of the page.
 */
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

/**
 * Importing FooterComponent from shared/footer/footer.component.
 * Component that displays the footer at the bottom of the page.
 */
import { FooterComponent } from './shared/footer/footer.component';

/**
 * Importing MenuOverlayComponent from shared/menu-overlay/menu-overlay.component.
 * Component that displays the menu overlay for mobile navigation.
 */
import { MenuOverlayComponent } from './shared/menu-overlay/menu-overlay.component';

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
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    CommonModule,
    MenuOverlayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
