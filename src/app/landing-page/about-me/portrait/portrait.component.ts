import { Component } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

@Component({
  selector: 'app-portrait',
  imports: [],
  templateUrl: './portrait.component.html',
  styleUrl: './portrait.component.scss',
})
export class PortraitComponent {
  isWindowOpen = true;
  isPortraitOpen = true;

  constructor(public svgIconsService: SvgIconsService) {}

  openPortrait() {
    this.isPortraitOpen = true;
  }

  closePortrait() {
    this.isPortraitOpen = false;
  }

  openWindow() {
    this.isWindowOpen = true;
    this.openPortrait();
  }

  closeWindow() {
    this.isWindowOpen = false;
  }
}
