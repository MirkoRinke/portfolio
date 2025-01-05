import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  isWindowOpen = true;
  isContentOpen = true;

  constructor() {}

  openContent() {
    this.isContentOpen = true;
  }

  closeContent() {
    this.isContentOpen = false;
  }

  openWindow() {
    this.isWindowOpen = true;
    this.openContent();
  }

  closeWindow() {
    this.isWindowOpen = false;
  }
}
