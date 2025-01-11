import { Component, Input } from '@angular/core';

import { WindowService } from '../services/window.service';
import { SvgIconsService } from '../services/svg.icons.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-window-controls',
  imports: [],
  templateUrl: './window-controls.component.html',
  styleUrl: './window-controls.component.scss',
})
export class WindowControlsComponent {
  @Input() windowService!: WindowService;
  @Input() svgIconsService!: SvgIconsService;
  @Input() languageService!: LanguageService;
}
