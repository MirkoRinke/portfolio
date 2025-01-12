import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TapService {
  public activeTap: string = 'home';

  constructor() {}

  activateTap(tap: string) {
    this.activeTap = tap;
  }
}
