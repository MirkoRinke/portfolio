import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageService } from '../services/language.service';
import { SvgIconsService } from '../../shared/services/svg.icons.service';
import { WindowService } from '../../shared/services/window.service';
import { ModalService } from '../../shared/services/modal.service';
import { UtilityService } from '../services/utility.service';

import { WindowControlsComponent } from '../window-controls/window-controls.component';

import { CertificateModalComponent } from '../../landing-page/expertise-section/certificates/certificate-modal/certificate-modal.component';

import { PortraitComponent } from '../../landing-page/about-me-section/portrait/portrait.component';
import { InfoBoxComponent } from '../../landing-page/about-me-section/info-box/info-box.component';
import { ExpertiseComponent } from '../../landing-page/expertise-section/expertise/expertise.component';
import { ProjectsComponent } from '../../landing-page/projects-section/projects/projects.component';
import { ContactComponent } from '../../landing-page/contact-section/contact/contact.component';
import { ImprintComponent } from '../../landing-page/imprint/imprint.component';
import { PrivacyPolicyComponent } from '../../landing-page/privacy-policy/privacy-policy.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-modal',
  imports: [
    CommonModule,
    WindowControlsComponent,
    CertificateModalComponent,
    PortraitComponent,
    InfoBoxComponent,
    ExpertiseComponent,
    ProjectsComponent,
    ContactComponent,
    ImprintComponent,
    PrivacyPolicyComponent,
    MenuComponent,
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
