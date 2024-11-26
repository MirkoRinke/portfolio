import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { Texts, textsDE, textsEN } from './language';
import { testimonialsEN, testimonialsDE } from './testimonials.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials: any = [];
  carouselTestimonials: any = [];
  texts: Texts = textsDE;
  currentIndex: number = 0;
  playAnimation = true;

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
    if (language === 'de') {
      this.texts = textsDE;
      this.testimonials = testimonialsDE;
    } else if (language === 'en') {
      this.texts = textsEN;
      this.testimonials = testimonialsEN;
    } else {
      this.texts = textsEN;
    }

    this.carouselTestimonials = [
      this.testimonials[this.testimonials.length - 1],
      ...this.testimonials,
      this.testimonials[0],
      this.testimonials[1],
    ];
  }

  next() {
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

  prev() {
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

  getTransform() {
    return `translateX(-${(this.currentIndex + 1) * 696}px)`;
  }
}