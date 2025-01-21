import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  private currentHoursSubject = new BehaviorSubject<string>(
    this.getCurrentHours()
  );
  currentHours$ = this.currentHoursSubject.asObservable();

  private fullDateDESubject = new BehaviorSubject<string>(this.getFullDateDE());
  fullDateDE$ = this.fullDateDESubject.asObservable();

  private fullDateENSubject = new BehaviorSubject<string>(this.getFullDateEN());
  fullDateEN$ = this.fullDateENSubject.asObservable();

  private currentYearSubject = new BehaviorSubject<number>(
    this.getCurrentYear()
  );
  currentYear$ = this.currentYearSubject.asObservable();

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.currentHoursSubject.next(this.getCurrentHours());
        this.fullDateDESubject.next(this.getFullDateDE());
        this.fullDateENSubject.next(this.getFullDateEN());
        this.currentYearSubject.next(this.getCurrentYear());
      }, 1000);
    });
  }

  private getCurrentHours(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  private getFullDateDE(): string {
    const now = new Date();
    return now.toLocaleDateString('de-DE');
  }

  private getFullDateEN(): string {
    const now = new Date();
    return now.toLocaleDateString('en-EN');
  }

  private getCurrentYear(): number {
    const now = new Date();
    return now.getFullYear();
  }
}
