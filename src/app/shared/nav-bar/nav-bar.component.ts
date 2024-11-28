import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';
import { Texts, textsDE, textsEN } from './language';
import { LanguageToggleComponent } from './language-toggle/language-toggle.component';

/**
 * Component representing the navigation bar.
 * Handles language changes and updates text translations accordingly.
 */
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  activeLink: string | null = null;
  texts: Texts = textsDE;

  /**
   * Subscription to handle language changes.
   * This subscription is used to manage and clean up resources related to language changes.
   * It is initialized when the component is created and unsubscribed when the component is destroyed.
   */
  private languageSubscription: Subscription | undefined;

  /**
   * Constructs an instance of NavBarComponent.
   * @param {LanguageService} languageService - Service to handle language-related operations.
   */
  constructor(private languageService: LanguageService) {}

  /**
   * Sets the active link in the navigation bar.
   * @param link - The link to be set as active.
   */
  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Subscribes to the selectedLanguage$ observable from the languageService to load texts based on the selected language.
   * Also loads texts immediately based on the current language.
   */
  ngOnInit() {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   * Unsubscribes from the language subscription if it exists to prevent memory leaks.
   */
  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * Loads the appropriate text translations based on the provided language.
   * @param {string} language - The language code ('de' for German, 'en' for English).
   */
  loadTexts(language: string) {
    if (language === 'de') this.texts = textsDE;
    else if (language === 'en') this.texts = textsEN;
    else this.texts = textsEN;
  }
}
