import { Component } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

@Component({
  selector: 'app-info-box',
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss',
})
export class InfoBoxComponent {
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
