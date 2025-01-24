import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SvgIconsService } from '../../../../shared/services/svg.icons.service';
import { WindowService } from '../../../../shared/services/window.service';
import { LanguageService } from '../../../../shared/services/language.service';
import { ModalService } from '../../../../shared/services/modal.service';

import { type Certificate, CERTIFICATES } from './../certificates.data';
import { WindowControlsComponent } from '../../../../shared/window-controls/window-controls.component';

@Component({
  selector: 'app-certificate-modal',
  imports: [WindowControlsComponent, CommonModule],
  templateUrl: './certificate-modal.component.html',
  styleUrl: './certificate-modal.component.scss',
})
export class CertificateModalComponent {
  @Input() index!: number;
  @Input() modalActive!: boolean;

  certificates: Certificate[] = CERTIFICATES;

  constructor(
    public modalService: ModalService,
    public languageService: LanguageService,
    public svgIconsService: SvgIconsService,
    public windowService: WindowService
  ) {}

  prevCertificate(certificates: any, index: number) {
    if (index < 0) index = certificates.length - 1;
    if (!certificates[index].visibility) {
      do {
        index = index - 1;
      } while (!certificates[index].visibility);
    }
    this.index = index;
  }

  nextCertificate(certificates: any, index: number) {
    if (index == certificates.length) index = 0;

    if (!certificates[index].visibility) {
      do {
        index = index + 1;
        if (index == certificates.length) index = 0;
      } while (!certificates[index].visibility);
    }
    this.index = index;
  }
}
