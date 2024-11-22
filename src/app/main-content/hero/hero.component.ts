import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { textsDE, textsEN } from './language';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { HeroSideElementsComponent } from '../hero-side-elements/hero-side-elements.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavBarComponent, HeroBannerComponent, HeroSideElementsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  texts: any = {};
  private languageSubscription: Subscription | undefined;

  constructor(private languageService: LanguageService) {}

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
