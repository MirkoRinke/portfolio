import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language.service';
import { Texts, textsDE, textsEN } from './language';
import {
  Testimonial,
  testimonialsEN,
  testimonialsDE,
} from './testimonials.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = testimonialsDE;
  carouselTestimonials: Testimonial[] = [];
  texts: Texts = textsDE;
  currentIndex: number = 0;
  playAnimation: boolean = true;
  adjustedValue: number = 696;

  private languageSubscription: Subscription | undefined;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSubscription =
      this.languageService.selectedLanguage$.subscribe((language) => {
        this.loadTexts(language);
      });
    this.loadTexts(this.languageService.getLanguage());
    this.adjustValueBasedOnWidth();
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

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

  generateCarouselTestimonials(): void {
    this.carouselTestimonials = [
      this.testimonials[this.testimonials.length - 1],
      ...this.testimonials,
      this.testimonials[0],
      this.testimonials[1],
    ];
  }

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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustValueBasedOnWidth();
  }

  adjustValueBasedOnWidth() {
    const width = window.innerWidth;
    if (width > 1450) this.adjustedValue = 696;
    if (width <= 1450 && width > 1100) this.adjustedValue = 496;
    if (width <= 1100 && width > 600) this.adjustedValue = 316;
    if (width <= 600) this.adjustedValue = 275;
  }

  getTransform(index: number): string {
    if (index - 1 !== this.currentIndex)
      return `translateX(-${
        (this.currentIndex + 1) * this.adjustedValue
      }px) scale(0.9)`;
    return `translateX(-${(this.currentIndex + 1) * this.adjustedValue}px)`;
  }
}
