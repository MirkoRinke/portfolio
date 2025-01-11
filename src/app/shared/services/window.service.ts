import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  ifWindowOpen: boolean = true;
  ifContentOpen: boolean = true;

  constructor() {}

  openContent() {
    this.ifContentOpen = true;
  }

  closeContent() {
    this.ifContentOpen = false;
  }

  openWindow() {
    console.log('openWindow');
    this.ifWindowOpen = true;
    this.openContent();
  }

  closeWindow() {
    console.log('closeWindow');
    this.ifWindowOpen = false;
  }
}
