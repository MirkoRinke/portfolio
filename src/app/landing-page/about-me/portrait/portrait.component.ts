import { Component } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';
import { WindowService } from '../../../shared/services/window.service';
import { LanguageService } from '../../../shared/services/language.service';
import { ModalService } from '../../../shared/services/modal.service';

import { WindowControlsComponent } from '../../../shared/window-controls/window-controls.component';
import { PortraitContentComponent } from './portrait-content/portrait-content.component';

@Component({
  selector: 'app-portrait',
  imports: [WindowControlsComponent, PortraitContentComponent],
  templateUrl: './portrait.component.html',
  styleUrl: './portrait.component.scss',
  providers: [WindowService],
})
export class PortraitComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}
}
