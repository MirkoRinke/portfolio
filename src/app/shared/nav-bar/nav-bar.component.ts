import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';
import { Texts, textsDE, textsEN } from './language';
import { LanguageToggleComponent } from './language-toggle/language-toggle.component';

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

  private languageSubscription: Subscription | undefined;

  constructor(private languageService: LanguageService) {}

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  loadTexts(language: string): void {
    if (language === 'de') this.texts = textsDE;
    else if (language === 'en') this.texts = textsEN;
    else this.texts = textsEN;
  }
}
