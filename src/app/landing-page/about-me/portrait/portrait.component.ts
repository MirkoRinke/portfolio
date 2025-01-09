import { Component } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';
import { WindowService } from '../../../shared/services/window.service';

import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-portrait',
  imports: [],
  templateUrl: './portrait.component.html',
  styleUrl: './portrait.component.scss',
  providers: [WindowService],
})
export class PortraitComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService
  ) {}
}
