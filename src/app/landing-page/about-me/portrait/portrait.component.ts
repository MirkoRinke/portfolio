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
  isContentOpen = true;

  constructor(public svgIconsService: SvgIconsService) {}

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
