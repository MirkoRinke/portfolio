import { Component } from '@angular/core';

import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';

import { FooterComponent } from '../shared/footer/footer.component';

import { Subscription } from 'rxjs';

import { LanguageService } from '../shared/services/language.service';

/**
 * Imports Router from @angular/router package.
 * Router enables navigation between views and components in Angular app.
 * Used to navigate to different sections of the page.
 */
import { Router } from '@angular/router';

/**
 * Imports ViewportScroller from Angular common package
 * @module ViewportScroller - Service that provides methods to control scrolling of the viewport
 * - Enables programmatic scrolling to specific positions
 * - Supports scrolling to anchors/elements
 * - Handles scroll position restoration during navigation
 */
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  language: string = '';

  private languageSubscription: Subscription | undefined;

  constructor(
    private languageService: LanguageService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  ngOnInit() {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  loadTexts(language: string) {
    if (language === 'de') this.language = 'DE';
    else if (language === 'en') this.language = 'EN';
    else this.language = 'EN';
  }

  /**
   * Scrolls to a specific section of the page identified by the given fragment.
   *
   * This method first clears any existing fragment in the URL, then sets a new fragment
   * after a short delay to ensure the page scrolls to the correct section.
   *
   * @param {string} fragment - The fragment identifier of the section to scroll to.
   *
   * @example
   * Scroll to the section with the id 'about'
   * (click)="scrollToSection('contact')"
   */
  scrollToSection(fragment: string): void {
    this.router
      .navigate([], {
        fragment: undefined,
        replaceUrl: true,
      })
      .then(() => {
        setTimeout(() => {
          this.router.navigate([], {
            fragment: fragment,
          });
          this.viewportScroller.scrollToAnchor(fragment);
        }, 10);
      });
  }
}
