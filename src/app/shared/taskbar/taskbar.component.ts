import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../shared/services/svg.icons.service';
import { WindowService } from '../../shared/services/window.service';
import { LanguageService } from '../../shared/services/language.service';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-taskbar',
  imports: [CommonModule],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss',
})
export class TaskbarComponent {
  currentHours: string = new Date().getHours() + ':' + new Date().getMinutes();

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
      this.currentHours = new Date().getHours() + ':' + new Date().getMinutes();
      this.fullDateDE = new Date().toLocaleDateString('de-DE');
      this.fullDateEN = new Date().toLocaleDateString('en-EN');
    }, 1000);
  }
}
