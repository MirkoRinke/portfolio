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
  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}
}
