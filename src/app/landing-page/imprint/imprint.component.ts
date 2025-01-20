import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../shared/services/svg.icons.service';

import { WindowService } from '../../shared/services/window.service';

import { LanguageService } from '../../shared/services/language.service';

import { ModalService } from '../../shared/services/modal.service';

import { WindowControlsComponent } from '../../shared/window-controls/window-controls.component';
import { ImprintContentComponent } from './imprint-content/imprint-content.component';

@Component({
  selector: 'app-imprint',
  imports: [CommonModule, WindowControlsComponent, ImprintContentComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  @Input() modalActive!: boolean;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}
}
