import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckVisibilityService {
  element!: ElementRef;
  isVisible = false;

  constructor() {}

  setElement(element: ElementRef) {
    this.element = element;
    this.checkVisibility();
  }

  checkVisibility() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.element.nativeElement);
  }
}
