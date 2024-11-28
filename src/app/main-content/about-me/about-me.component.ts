import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { Texts, textsDE, textsEN } from './language';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  isHovered = false;
  texts: Texts = textsDE;
  private languageSubscription: Subscription | undefined;

  constructor(private languageService: LanguageService) {}

  onMouseOver() {
    this.isHovered = true;
  }

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
    if (language === 'de') this.texts = textsDE;
    else if (language === 'en') this.texts = textsEN;
    else this.texts = textsEN;
  }
}
