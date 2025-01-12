import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../../shared/services/svg.icons.service';

import { WindowService } from '../../../shared/services/window.service';

import { TapService } from '../../../shared/services/tap.service';

import { SkillsComponent } from './../skills/skills.component';
import { CertificatesComponent } from './../certificates/certificates.component';

import { LanguageService } from '../../../shared/services/language.service';

import { ModalService } from '../../../shared/services/modal.service';

import { WindowControlsComponent } from '../../../shared/window-controls/window-controls.component';

@Component({
  selector: 'app-expertise',
  imports: [
    CommonModule,
    SkillsComponent,
    CertificatesComponent,
    WindowControlsComponent,
  ],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
  providers: [WindowService, TapService],
})
export class ExpertiseComponent {
  @Input() modalActive!: boolean;

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public tapService: TapService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {}
}
