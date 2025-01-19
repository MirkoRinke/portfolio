import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  currentHours: string = new Date().getHours() + ':' + new Date().getMinutes();

  currentYear = new Date().getFullYear();

  fullDateDE = new Date().toLocaleDateString('de-DE');
  fullDateEN = new Date().toLocaleDateString('en-EN');

  constructor() {
    setInterval(() => {
      this.currentHours = new Date().getHours() + ':' + new Date().getMinutes();
      this.fullDateDE = new Date().toLocaleDateString('de-DE');
      this.fullDateEN = new Date().toLocaleDateString('en-EN');
    }, 1000);
  }
}
