import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';
import { ScrollService } from '../services/scroll.service';
import { Texts, textsDE, textsEN } from './language';
import { LanguageToggleComponent } from './language-toggle/language-toggle.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LanguageToggleComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  activeLink: string | null = null;
  texts: Texts = textsDE;
  showMenu = false;

  private languageSubscription: Subscription | undefined;

  constructor(
    private languageService: LanguageService,
    private scrollService: ScrollService
  ) {}

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  openMenu(): void {
    this.showMenu = !this.showMenu;
    this.scrollService.disableScroll();
  }

  closeMenu(): void {
    this.showMenu = false;
    this.scrollService.enableScroll();
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
