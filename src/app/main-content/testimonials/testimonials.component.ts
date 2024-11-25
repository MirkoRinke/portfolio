import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { textsDE, textsEN } from './language';
import { testimonialsEN, testimonialsDE } from './testimonials.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: any = {};
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
    if (language === 'de')
      (this.texts = textsDE), (this.testimonials = testimonialsDE);
    else if (language === 'en')
      (this.texts = textsEN), (this.testimonials = testimonialsEN);
    else this.texts = textsEN;
  }
}
