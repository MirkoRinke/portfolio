import { Component } from '@angular/core';

import { LanguageService } from '../services/language.service';
import { SvgIconsService } from '../../shared/services/svg.icons.service';
import { WindowService } from '../../shared/services/window.service';
import { ModalService } from '../../shared/services/modal.service';
import { UtilityService } from '../services/utility.service';

import { WindowControlsComponent } from '../window-controls/window-controls.component';

import { CertificateModalComponent } from '../../landing-page/expertise/certificates/certificate-modal/certificate-modal.component';

import { PortraitComponent } from '../../landing-page/about-me/portrait/portrait.component';
import { InfoBoxComponent } from '../../landing-page/about-me/info-box/info-box.component';
import { ExpertiseComponent } from '../../landing-page/expertise/expertise/expertise.component';
import { ProjectsComponent } from '../../landing-page/projects-section/projects/projects.component';

@Component({
  selector: 'app-modal',
  imports: [
    WindowControlsComponent,
    CertificateModalComponent,
    PortraitComponent,
    InfoBoxComponent,
    ExpertiseComponent,
    ProjectsComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  constructor(
    public languageService: LanguageService,
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public modalService: ModalService,
    public utilityService: UtilityService
  ) {}
}
