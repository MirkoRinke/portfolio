/**
 * Importing Angular core decorators and utilities:
 * - Component: Core decorator for defining Angular components
 * - HostListener: Decorator for listening to host element events
 * Used for component definition and handling window resize events
 */
import { Component, HostListener } from '@angular/core';

/**
 * Importing CommonModule from @angular/common:
 * - Provides common Angular directives and pipes
 * - Contains core directives like *ngIf, *ngFor
 * - Required for basic template functionality
 * Used to access essential Angular template features in testimonials component
 */
import { CommonModule } from '@angular/common';

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
 * Importing testimonials types and data:
 * - Testimonial: Interface defining structure of testimonial items
 * - testimonialsEN: Array of testimonials in English
 * - testimonialsDE: Array of testimonials in German
 * Used to display and manage testimonials based on selected language
 */
import {
  Testimonial,
  testimonialsEN,
  testimonialsDE,
} from './testimonials.data';

/**
 * Importing DomSanitizer and SafeHtml from @angular/platform-browser:
 * - DomSanitizer: Service for sanitizing values to ensure DOM safety
 * - SafeHtml: Type representing sanitized HTML content
 * Used to safely render dynamic HTML content like testimonial quotes
 * Prevents XSS attacks while allowing necessary HTML formatting
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

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  /**
   * Holds the texts to be displayed in the "About Me" section of the main content.
   * The texts are assigned from the `textsDE` object, which contains the German translations.
   *
   * @type {Texts}
   */
  texts: Texts = textsDE;

  /**
   * Array of testimonial objects to be displayed in the component.
   * Initially set to German testimonials as default language.
   * Will be updated when language changes via LanguageService.
   */
  testimonials: Testimonial[] = testimonialsDE;

  /**
   * Array of testimonials currently displayed in the carousel view.
   * Subset of main testimonials array filtered based on viewport size.
   * Empty by default, populated in ngOnInit and updated on window resize.
   */
  carouselTestimonials: Testimonial[] = [];

  /**
   * Index tracking the currently displayed testimonial in the carousel.
   * - Starts at 0 (first testimonial)
   * - Used to control which testimonial is shown
   * - Updated when navigating through carousel
   */
  currentIndex: number = 0;

  /**
   * Boolean flag controlling carousel slide animation state:
   * - true: Enables slide transition animations
   * - false: Disables animations for immediate transitions
   * Used to control animation behavior when navigating testimonials
   */
  playAnimation: boolean = true;

  /**
   * Value used to adjust carousel positioning and layout:
   * - Fixed pixel value (696px) for testimonial card width
   * - Used in calculations for slide transitions and positioning
   * - Value chosen based on design requirements
   * - May need adjustment based on viewport size
   */
  adjustedValue: number = 696;

  /**
   * Private property to store subscription to language service.
   * - Manages subscription to language changes
   * - Type allows for undefined initial state
   * - Will be cleaned up on component destroy
   * - Prevents memory leaks by proper unsubscription
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructor for TestimonialsComponent
   * @param languageService - Service for handling language changes and translations
   * @param sanitizer - Service for sanitizing HTML content for safe DOM rendering
   */
  constructor(
    private languageService: LanguageService,
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
   * Lifecycle hook that is called after component initialization.
   * Performs the following setup:
   * - Subscribes to language changes to update texts
   * - Loads initial texts based on current language
   * - Adjusts carousel layout based on viewport width
   */
  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
    this.adjustValueBasedOnWidth();
  }

  /**
   * Lifecycle hook that is called when component is about to be destroyed.
   * Performs cleanup by:
   * - Checking if language subscription exists
   * - Unsubscribing from language changes if it exists
   * - Prevents memory leaks by proper subscription cleanup
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Loads appropriate text content based on selected language.
   * - Sets texts and testimonials based on language parameter
   * - Handles German ('de') and English ('en') languages
   * - Falls back to English if unknown language is passed
   * - Regenerates carousel testimonials after language change
   *
   * @param language - The language code to load texts for ('de' or 'en')
   */
  loadTexts(language: string): void {
    if (language === 'de') {
      this.texts = textsDE;
      this.testimonials = testimonialsDE;
    } else if (language === 'en') {
      this.texts = textsEN;
      this.testimonials = testimonialsEN;
    } else {
      this.texts = textsEN;
    }
    this.generateCarouselTestimonials();
  }

  /**
   * Generates the array of testimonials for the carousel display.
   * Creates a new array with the following structure:
   * - First item: Last testimonial (for seamless backward navigation)
   * - Middle items: All testimonials in order
   * - Last items: First two testimonials (for seamless forward navigation)
   * This arrangement enables infinite scrolling effect in the carousel
   */
  generateCarouselTestimonials(): void {
    this.carouselTestimonials = [
      this.testimonials[this.testimonials.length - 1],
      ...this.testimonials,
      this.testimonials[0],
      this.testimonials[1],
    ];
  }

  /**
   * Advances the carousel to show the next testimonial.
   * Handles infinite scrolling behavior:
   * - Increments current index
   * - If at end of list, resets to start seamlessly:
   *   1. Disables animation
   *   2. Jumps to start (index 0)
   *   3. After brief delay, moves to index 1 with animation
   * - 50ms timeout allows for smooth transition
   */
  next(): void {
    this.currentIndex++;
    if (this.currentIndex >= this.testimonials.length + 1) {
      this.currentIndex = 0;
      this.playAnimation = false;
      setTimeout(() => {
        this.currentIndex = 1;
        this.playAnimation = true;
      }, 50);
    }
  }

  /**
   * Moves the carousel to show the previous testimonial.
   * Handles infinite scrolling behavior:
   * - Decrements current index
   * - If at start of list, wraps to end seamlessly:
   *   1. Disables animation
   *   2. Jumps to end (testimonials.length)
   *   3. After brief delay, moves to last item with animation
   * - 50ms timeout allows for smooth transition
   */
  prev(): void {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.testimonials.length;
      this.playAnimation = false;
      setTimeout(() => {
        this.currentIndex = this.testimonials.length - 1;
        this.playAnimation = true;
      }, 50);
    }
  }

  /**
   * Host listener decorator that binds to window resize events.
   * Calls adjustValueBasedOnWidth() method whenever window is resized.
   *
   * @param event - The resize event object
   * Used to adjust carousel layout responsively based on viewport width
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustValueBasedOnWidth();
  }

  /**
   * Adjusts the carousel card width value based on the current viewport width.
   * Sets this.adjustedValue to appropriate pixel values for different breakpoints:
   * - > 1450px: 696px card width
   * - 1100-1450px: 496px card width
   * - 600-1100px: 316px card width
   * - < 600px: 275px card width
   * Called on component init and window resize to ensure responsive layout
   */
  adjustValueBasedOnWidth() {
    const width = window.innerWidth;
    if (width > 1450) this.adjustedValue = 696;
    if (width <= 1450 && width > 1100) this.adjustedValue = 496;
    if (width <= 1100 && width > 600) this.adjustedValue = 316;
    if (width <= 600) this.adjustedValue = 275;
  }

  /**
   * Calculates the CSS transform property value for an element based on its index.
   *
   * @param {number} index - The index of the element.
   * @returns {string} The CSS transform property value.
   */
  getTransform(index: number): string {
    if (index - 1 !== this.currentIndex)
      return `translateX(-${
        (this.currentIndex + 1) * this.adjustedValue
      }px) scale(0.9) rotate(0.2deg)`;
    return `translateX(-${(this.currentIndex + 1) * this.adjustedValue}px)`;
  }
}
