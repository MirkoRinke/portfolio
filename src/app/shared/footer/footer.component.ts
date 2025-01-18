import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../shared/services/svg.icons.service';
import { WindowService } from '../../shared/services/window.service';
import { LanguageService } from '../../shared/services/language.service';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentHours: string =
    new Date().getHours() +
    ':' +
    new Date().getMinutes() +
    ':' +
    new Date().getSeconds();
  currentYear = new Date().getFullYear();

  fullDateDE = new Date().toLocaleDateString('de-DE');
  fullDateEN = new Date().toLocaleDateString('en-EN');

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {
    setInterval(() => {
      this.currentHours =
        new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ':' +
        new Date().getSeconds();
      this.fullDateDE = new Date().toLocaleDateString('de-DE');
      this.fullDateEN = new Date().toLocaleDateString('en-EN');
    }, 1000);
  }
}
