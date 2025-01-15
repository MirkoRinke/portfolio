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
  imports: [CommonModule, WindowControlsComponent],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
  providers: [WindowService],
})
export class ExpertiseComponent {
  @Input() modalActive!: boolean;

  selectedComponent: any;

  componentMapping: { [key: string]: any } = {
    skills: SkillsComponent,
    certificates: CertificatesComponent,
  };

  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public tapService: TapService,
    public languageService: LanguageService,
    public modalService: ModalService
  ) {
    this.updateSelectedComponent();
  }

  updateSelectedComponent() {
    this.selectedComponent =
      this.componentMapping[this.tapService.activeTapExpertise];
  }

  ngOnChanges() {
    this.updateSelectedComponent();
  }
}
