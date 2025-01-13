import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TapService {
  public activeTapExpertise: string = 'home';
  public activeTapProjects: string = 'home';

  constructor() {}

  activateTap(tap: string, componente: string) {
    if (componente === 'expertise') this.activeTapExpertise = tap;
    if (componente === 'projects') this.activeTapProjects = tap;
  }
}
