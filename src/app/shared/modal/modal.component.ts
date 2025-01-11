import { Component } from '@angular/core';

import { WindowService } from '../../shared/services/window.service';

import { ModalService } from '../../shared/services/modal.service';

import { SvgIconsService } from '../../shared/services/svg.icons.service';

import { LanguageService } from '../services/language.service';

import { CertificateModalComponent } from '../../landing-page/expertise/certificates/certificate-modal/certificate-modal.component';
import { WindowControlsComponent } from '../window-controls/window-controls.component';

@Component({
  selector: 'app-modal',
  imports: [CertificateModalComponent, WindowControlsComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  constructor(
    public svgIconsService: SvgIconsService,
    public windowService: WindowService,
    public modalService: ModalService,
    public languageService: LanguageService
  ) {}
}
