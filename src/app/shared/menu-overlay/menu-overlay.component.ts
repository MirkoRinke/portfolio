/**
 * @fileoverview This file defines the MenuOverlayComponent, an Angular component
 * that provides the menu overlay functionality. It imports necessary Angular modules
 * and services, and uses the NavigationService to manage active navigation links.
 */

/**
 * Imports Angular's Component
 * @module Component - Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
 */
import { Component } from '@angular/core';

/**
 * Imports Angular's CommonModule
 * @module CommonModule - Provides common Angular directives and pipes like ngIf, ngFor, etc.
 */
import { CommonModule } from '@angular/common';

/**
 * Importing NavigationService to handle navigation-related operations.
 * - Provides methods to manage active navigation link
 * - Emits active link changes to components
 * - Core service for navigation in the application
 */
import { NavigationService } from '../services/navigation.service';

/**
 * Angular component for the menu overlay.
 *
 * @component
 * @selector app-menu-overlay
 * @standalone true
 * @imports CommonModule
 * @templateUrl ./menu-overlay.component.html
 * @styleUrl ./menu-overlay.component.scss
 */
@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss',
})
export class MenuOverlayComponent {
  /**
   * Constructor
   * @param navigationService - Provides methods to manage active navigation link
   */
  constructor(public navigationService: NavigationService) {}
}
