/**
 * @fileoverview This file contains the NavigationService which is responsible for handling navigation-related operations.
 */

/**
 * Injectable decorator marks this class as available to be provided and injected as a dependency.
 */
import { Injectable } from '@angular/core';

/**
 * BehaviorSubject is a type of Subject that requires an initial value and emits its current value to new subscribers.
 */
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Importing ScrollService which provides methods to handle scroll-related operations.
 */
import { ScrollService } from './scroll.service';

/**
 * Injectable decorator marks this class as available to be provided and injected as a dependency.
 */
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  /**
   * A BehaviorSubject that holds the currently active navigation link.
   * It can be a string representing the link or null if no link is active.
   *
   * @private
   * @type {BehaviorSubject<string | null>}
   */
  private activeLink: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  /**
   * An observable that emits the currently active navigation link.
   *
   * @type {Observable<string>}
   */
  activeLink$: Observable<string | null> = this.activeLink.asObservable();

  /**
   * A boolean flag indicating whether the menu should be shown.
   *
   * @private
   */
  private showMenu: boolean = false;

  /**
   * Creates an instance of NavigationService.
   *
   * @param {ScrollService} scrollService - The service used to handle scrolling functionality.
   */
  constructor(private scrollService: ScrollService) {}

  /**
   * Retrieves the currently active navigation link.
   *
   * @returns {string | null} The active link as a string, or null if no link is active.
   */
  getActiveLink(): string | null {
    return this.activeLink.value;
  }

  /**
   * Sets the active link in the navigation service.
   *
   * @param {string} link - The link to be set as active.
   * @returns {void}
   */
  setActiveLink(link: string): void {
    this.activeLink.next(link);
  }

  /**
   * Resets the active link by setting it to null.
   * This method updates the activeLink observable to indicate that no link is currently active.
   */
  resetActiveLink(): void {
    this.activeLink.next(null);
  }

  /**
   * Checks if the menu is currently open.
   *
   * @returns {boolean} True if the menu is open, false otherwise.
   */
  isMenuOpen(): boolean {
    return this.showMenu;
  }

  /**
   * Opens the menu by setting the `showMenu` property to `true`.
   * If the menu is not already shown, it also adds scroll listeners
   * using the `scrollService`.
   */
  openMenu(): void {
    if (!this.showMenu) {
      this.showMenu = true;
      this.scrollService.addScrollListeners();
    }
  }

  /**
   * Closes the menu if it is currently open.
   *
   * This method sets the `showMenu` property to `false` and removes scroll listeners
   * using the `scrollService` if the menu is currently shown.
   */
  closeMenu(): void {
    if (this.showMenu) {
      this.showMenu = false;
      this.scrollService.removeScrollListeners();
    }
  }

  /**
   * Toggles the visibility of the menu.
   * If the menu is currently shown, it will be closed.
   * If the menu is currently hidden, it will be opened.
   */
  toggleMenu(): void {
    if (this.showMenu) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }
}
