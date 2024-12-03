/** @fileoverview This file defines the ColorToggleComponent for toggling colors in an Angular application. */

/**
 * Importing Component from @angular/core.
 * The Component decorator is used to define an Angular component.
 * It provides metadata about the component, such as its selector, template, and styles.
 */
import { Component } from '@angular/core';

/**
 * Importing CommonModule from @angular/common.
 * Required Angular module that provides:
 * - Common directives like *ngIf and *ngFor
 * - Pipes for data transformation
 * - Basic template functionality
 * Used to access core Angular features in the language toggle component
 */
import { CommonModule } from '@angular/common';

/**
 * Component decorator to define the ColorToggleComponent.
 * - selector: The CSS selector that identifies this component in a template.
 * - standalone: Indicates that this component is a standalone component.
 * - imports: Modules that are required by this component.
 * - templateUrl: The path to the component's template file.
 * - styleUrl: The path to the component's style file.
 */
@Component({
  selector: 'app-color-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-toggle.component.html',
  styleUrl: './color-toggle.component.scss',
})
export class ColorToggleComponent {
  /**
   * The current color selected for the color toggle component.
   * This can be a string representing the color or null if no color is selected.
   */
  currentColor: string | null = null;

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes the component by checking for a saved color in local storage.
   * If a saved color is found, it adds the color class to the document body and sets the current color.
   */
  ngOnInit() {
    const savedColor = localStorage.getItem('currentColor');
    if (savedColor) {
      document.body.classList.add(savedColor);
      this.currentColor = savedColor;
    }
  }

  /**
   * Sets the color theme for the application.
   *
   * @param {string} color - The color theme to apply. If the value is 'default', the color theme will be reset to the default theme.
   */
  setColor(color: string) {
    if (color === 'default') {
      this.resetColor();
    } else {
      this.applyColor(color);
    }
  }

  /**
   * Resets the current color theme by removing the associated class from the document body,
   * clearing the `currentColor` property, and removing the `currentColor` item from local storage.
   * This method ensures that no color theme is applied to the document body.
   */
  resetColor() {
    if (this.currentColor) {
      document.body.classList.remove(this.currentColor);
      this.currentColor = null;
      localStorage.removeItem('currentColor');
    }
  }

  /**
   * Applies the specified color to the document body by adding a corresponding CSS class.
   * If a color is already applied, it removes the previous color class before adding the new one.
   * The current color is also stored in local storage.
   *
   * @param {string} color - The color to be applied. This should correspond to a CSS class name.
   */
  applyColor(color: string) {
    if (this.currentColor) {
      document.body.classList.remove(this.currentColor);
    }
    document.body.classList.add(color);
    this.currentColor = color;
    localStorage.setItem('currentColor', color);
  }
}
