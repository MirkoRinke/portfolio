/**
 * @fileoverview This service provides methods to enable and disable scrolling on the webpage.
 * It also includes functionality to prevent default scrolling behavior.
 */

/**
 * Importing Injectable decorator from @angular/core.
 * Required to:
 * - Mark class as injectable service
 * - Enable dependency injection
 * - Configure service lifetime/scope
 * - Allow service to be provided to components/other services
 */
import { Injectable } from '@angular/core';

/**
 * Injectable decorator configuration for ScrollService.
 * - providedIn: 'root' makes service available app-wide
 * - Creates singleton instance via Angular's DI system
 * - More efficient than providing in modules
 * - Enables tree-shaking optimization
 */
@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  /**
   * Disables scrolling on the webpage by setting the body's overflow style to 'hidden'.
   * Additionally, it compensates for the width of the scrollbar by adding padding to the right of the body.
   * This prevents the layout from shifting when the scrollbar is hidden.
   */
  disableScroll() {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }

  /**
   * Enables scrolling on the document body by resetting the `overflow` and `paddingRight` styles.
   */
  enableScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  /**
   * Prevents the default scrolling behavior and stops the event from propagating.
   *
   * @param {Event} event - The event object that triggered the scroll.
   * @returns {boolean} Always returns false to indicate that the default action should not be taken.
   */
  preventScroll = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  /**
   * Adds event listeners to the window object to prevent scrolling.
   *
   * This method attaches three event listeners to the window object:
   * - 'scroll': Prevents the default scroll behavior.
   * - 'wheel': Prevents the default wheel behavior.
   * - 'touchmove': Prevents the default touchmove behavior.
   *
   * All event listeners are added with the `passive: false` option to ensure
   * that the default behavior can be prevented.
   *
   * @private
   */
  addScrollListeners() {
    window.addEventListener('scroll', this.preventScroll, { passive: false });
    window.addEventListener('wheel', this.preventScroll, { passive: false });
    window.addEventListener('touchmove', this.preventScroll, {
      passive: false,
    });
  }

  /**
   * Removes event listeners that prevent scrolling.
   *
   * This method removes the 'scroll', 'wheel', and 'touchmove' event listeners
   * from the window object, which were previously added to prevent scrolling.
   *
   * @memberof ScrollService
   */
  removeScrollListeners() {
    window.removeEventListener('scroll', this.preventScroll);
    window.removeEventListener('wheel', this.preventScroll);
    window.removeEventListener('touchmove', this.preventScroll);
  }
}
