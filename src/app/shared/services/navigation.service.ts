import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private activeLink = new BehaviorSubject<string | null>(null);

  activeLink$ = this.activeLink.asObservable();

  getActiveLink(): string | null {
    return this.activeLink.value;
  }

  setActiveLink(link: string): void {
    this.activeLink.next(link);
  }

  resetActiveLink(): void {
    this.activeLink.next(null);
  }
}
