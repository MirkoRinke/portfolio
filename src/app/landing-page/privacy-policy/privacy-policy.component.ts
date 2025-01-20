import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../shared/services/svg.icons.service';

import { WindowService } from '../../shared/services/window.service';

import { LanguageService } from '../../shared/services/language.service';

import { ModalService } from '../../shared/services/modal.service';

import { WindowControlsComponent } from '../../shared/window-controls/window-controls.component';
import { PrivacyPolicyContentComponent } from './privacy-policy-content/privacy-policy-content.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [
    CommonModule,
    WindowControlsComponent,
    PrivacyPolicyContentComponent,
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  @Input() modalActive!: boolean;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}
}
