import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  disableScroll() {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }

  enableScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  preventScroll = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  addScrollListeners() {
    window.addEventListener('scroll', this.preventScroll, { passive: false });
    window.addEventListener('wheel', this.preventScroll, { passive: false });
    window.addEventListener('touchmove', this.preventScroll, {
      passive: false,
    });
  }

  removeScrollListeners() {
    window.removeEventListener('scroll', this.preventScroll);
    window.removeEventListener('wheel', this.preventScroll);
    window.removeEventListener('touchmove', this.preventScroll);
  }
}
