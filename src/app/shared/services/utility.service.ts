import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  disabledScroll() {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }

  enableScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }

  getNumbersFromEnd(inputString: string): number {
    const match = inputString.match(/(\d+)$/);
    return match ? parseInt(match[0], 10) : NaN;
  }
}
