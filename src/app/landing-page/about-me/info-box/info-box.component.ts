import { Component, Input } from '@angular/core';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

import { WindowService } from '../../../shared/services/window.service';

import { LanguageService } from '../../../shared/services/language.service';

import { ModalService } from '../../../shared/services/modal.service';

import { WindowControlsComponent } from '../../../shared/window-controls/window-controls.component';

@Component({
  selector: 'app-info-box',
  imports: [WindowControlsComponent],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss',
  providers: [WindowService],
})
export class InfoBoxComponent {
  @Input() title!: string;
  @Input() textarea!: string;
  @Input() index!: number;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}
}
